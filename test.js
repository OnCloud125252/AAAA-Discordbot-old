/////////////////////////////////////////////
//                                         //
//   This is the beta version of the bot   //
//                                         //
/////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////SETUP////////////////////////////////////////////////////////////////////////////
const login_info = 'Terminal' //可修改  (Heroku/Terminal)
const version = '3 [b1]' //可修改  (版本)

import auth from './auth.js';
import base64 from 'hi-base64';
import rot from 'rot';
import Discord from 'discord.js';
import * as func from './function.js'
import * as prefix from './prefix.js';
import request from 'request';
import cheerio from 'cheerio';
import prettyMS from 'pretty-ms';
import fs from 'fs';
//import memeURL from './memeURL.json'
const client = new Discord.Client({ intents: (new Discord.Intents()).add(Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_INVITES) });


//Server ID//
const AAAADiscordBot = '864375027935608852';
const 玩WB的台灣人 = '849308660886929448';
const 珍奶效應 = '895314309855461376'

//Channel ID//
const 珍奶效應_welcome = '895314309855461378'

//Admin User//
const adminUser = [
    '755269122597585018', //꧁AAAA꧂#2713
];

//Trusted Role//
const trustedRole = [
    '880760153232773130', //AAAA--DiscordBot [Moderator]
    '864375307330387999', //AAAA--DiscordBot [Member]
    '881053916337438740', //AAAA--DiscordBot [demonstration]
    '849465716154433577', //玩WB的台灣人 [成員]
];

///Time///
var dateObject = new Date();

function TWtime() {
    let dateObject_TW = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
    let TimeString = `${dateObject_TW}`;
    return TimeString;
};

function Wtime() {
    let dateObject_W = new Date().toLocaleString('zh-TW', { timeZone: 'Europe/London' });
    let WTimeString = `${dateObject_W}`;
    return WTimeString;
};

//Delay//
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

//隨機取數//
function getRandom(x) {
    return Math.floor(Math.random() * x);
};

///Log file//
function logfile(log) {
    let writelog = `[${TWtime()}]\n   ﹂> ${log}\n`;
    fs.appendFileSync("./log_file.log", writelog);
};

//登入資訊
if (login_info === 'Terminal') {
    client.login(auth);
}
else if (login_info === 'Heroku') {
    client.login(process.env.DJS_TEST_TOKEN);
};
client.on('ready', () => {
    //console.clear();
    console.log("\n");
    console.log("::::::::::::::::::::::::::::::::::::");
    console.log("::                                ::");
    console.log("::   THIS IS THE BETA VERSION !   ::");
    console.log("::                                ::");
    console.log("::::::::::::::::::::::::::::::::::::");
    console.log("\n");
    console.log(`User name :        ${client.user.tag}!`);
    console.log(`Login platform :   ${login_info}`);
    console.log(`Time :             ${TWtime()}`);
    console.log(`Version :          V ${version}`);
    console.log();
    console.log(`Codever = ${codever}`);
    console.log();
    console.log("---------------------- Log ----------------------");
});
/////////////////////////////////////////////////////////////////////////SETUPEND//////////////////////////////////////////////////////////////////////////
if (login_info === 'Terminal') {
    //These line will only works when ${login_info} === 'Terminal'/////////////////////////////////////////////////////////////////////////////////////////////
    client.on('message', async msg => {
        ////前置判斷////
        try {
            if (!msg.guild || !msg.member) return;
            if (!msg.member.user) return;
            if (msg.member.user.bot) return;
        } catch (err) {
            return;
        };
        try {
            //Prefix = $
            if (msg.content.startsWith(prefix.Test)) {
                const cmd = msg.content.substring(prefix.Test.length).split(' ');
                switch (cmd[0]) {
                    //
                    case 'stats':

                    //

                    case 'botinfo':
                        msg.channel.send('看到這行的人可以獲得一罐雪碧 ฅ ^• ω •^ ฅ').then(resultMessage => {
                            const ping = (resultMessage.createdTimestamp - msg.createdTimestamp)
                            const emb_botinfo = new Discord.MessageEmbed()
                                .setColor('#4169e1')
                                .setTitle(`Bot info`)
                                .addFields({ name: `**Login Platform :**`, value: `\`${login_info}\`` })
                                .addFields({ name: `Bot latency :`, value: `\`${ping} ms\`` })
                                .addFields({ name: `API Latency :`, value: `\`${client.ws.ping} ms\`` })
                                .setFooter(`V ${version}\nUptime : ${prettyMS(client.uptime)}\nCodever = ${codever}`)
                                .setTimestamp();
                            resultMessage.delete();
                            resultMessage.channel.send(emb_botinfo);
                        });
                        break;
                    ///
                    case 'md':
                        getschedule().then(data => {
                            console.log(data.day1[1]);
                        });
                        break;
                    ///
                    case 'rot':
                        var input = msg.content.slice(-(msg.content.length - (7 + cmd[1].length)));
                        if (cmd[2] && input) {
                            msg.channel.send('`' + rot(input, Number(cmd[1])) + '`');
                        }
                        else {
                            msg.channel.send({
                                embed: {
                                    color: "#0099ff",
                                    title: "rot shifting",
                                    url: "https://github.com/mathiasbynens/rot",
                                    description: "A library that performs rotational letter substitution by `mathiasbynens`",
                                    fields: [
                                        {
                                            name: "Prefix",
                                            value: "A",
                                        },
                                        {
                                            name: "rot [value] [text]",
                                            value: "Shift letters in [text] by [value]",
                                            inline: true,
                                        },
                                    ],
                                    timestamp: new Date(),
                                }
                            });
                        };
                        break;
                    ///
                    case 'base64':
                        if (cmd[1] == 'e' && cmd[2]) {
                            msg.channel.send('`' + base64.encode(msg.content.slice(-(msg.content.length - 11))) + '`');
                        }
                        else if (cmd[1] == 'd' && cmd[2]) {
                            msg.channel.send('`' + base64.decode(cmd[2]) + '`');
                        }
                        else {
                            msg.channel.send({
                                embed: {
                                    color: "#0099ff",
                                    title: "base64 encoded/decode",
                                    url: "https://github.com/emn178/hi-base64",
                                    description: "A Base64 encode/decode library by `emn178`",
                                    fields: [
                                        {
                                            name: "Prefix",
                                            value: "A",
                                        },
                                        {
                                            name: "base64 [`e`or`d`] [value]",
                                            value: "`e`\nEncode [value] with base64\n(All languages supported)\n\n`d`\nDecode [value] with base64\n(Support English only)",
                                            inline: true,
                                        },
                                    ],
                                    timestamp: new Date(),
                                }
                            });
                        };
                        break;
                    ///
                    case 'meme':
                        var random_meme = memeURL[getRandom(memeURL.length)];
                        msg.channel.send(`${random_meme}`);
                        /*
                        msg.channel.send({
                            embed: {
                                color: "#00d0ff",
                                image: {
                                    url: `${random_meme}`,
                                },
                            }
                        });
                        */
                        break;
                    ///
                    case 'announce':
                        switch (cmd[1]) {
                            case 'invite':
                                var invitelink = msg.content.substring(cmd[0].length + cmd[1].length + 3).split(' ');
                                msg.delete();
                                msg.channel.send({
                                    embed: {
                                        color: "#00ffff",
                                        title: "這是邀請連結 :arrow_down_small: :arrow_down_small: :arrow_down_small: ",
                                        fields: [
                                            {
                                                name: `${invitelink}`,
                                                value: "\u200B",
                                            }
                                        ],
                                        footer: {
                                            text: "歡迎來喝台灣的珍珠奶茶 >w<",
                                        }
                                    }
                                });
                                break;
                        }
                        break;
                    ///
                    case 'test':
                        msg.channel.send(typeof (a));
                        break;
                    ///
                };
            };
        } catch (err) { console.log('OnMessageError', err) };
    });
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
};
const codever = '0';
/*
const input = `CREATE_INSTANT_INVITE
KICK_MEMBERS
BAN_MEMBERS
ADMINISTRATOR
MANAGE_CHANNELS
MANAGE_GUILD
ADD_REACTIONS
VIEW_AUDIT_LOG
PRIORITY_SPEAKER
STREAM
VIEW_CHANNEL
SEND_MESSAGES
SEND_TTS_MESSAGES
MANAGE_MESSAGES
EMBED_LINKS
ATTACH_FILES
READ_MESSAGE_HISTORY
MENTION_EVERYONE
USE_EXTERNAL_EMOJIS
VIEW_GUILD_INSIGHTS
CONNECT
SPEAK
MUTE_MEMBERS
DEAFEN_MEMBERS
MOVE_MEMBERS
USE_VAD
CHANGE_NICKNAME
MANAGE_NICKNAMES
MANAGE_ROLES
MANAGE_WEBHOOKS
MANAGE_EMOJIS_AND_STICKERS
USE_APPLICATION_COMMANDS
REQUEST_TO_SPEAK
MANAGE_THREADS
USE_PUBLIC_THREADS
CREATE_PUBLIC_THREADS
USE_PRIVATE_THREADS
CREATE_PRIVATE_THREADS
USE_EXTERNAL_STICKERS
SEND_MESSAGES_IN_THREADS
START_EMBEDDED_ACTIVITIES`

//console.log(input.replace(/\n/g, ',\n'));
*/

//var dateObject_TW = new Date().toLocaleString('zh-TW', {timeZone: 'Asia/Taipei'});
//var year = dateObject.getFullYear();  //年(西元) 4digital
//var month = dateObject.getMonth();  //月 0~11
//var date = dateObject.getDate(); //日 1~31
//var day = dateObject.getDay();  //星期 0~5
//var hours = (dateObject.getHours()+8);
//var minutes = dateObject.getMinutes();
//var seconds = dateObject.getSeconds();

///Meme///
//Get random meme
/*
case 'meme':
    var random_meme = memeURL[getRandom(memeURL.length)];
    msg.channel.send({
        embed: {
            color: "#00d0ff",
            image: {
                url: `${random_meme}`,
            },
        }
    });
    break;

//Add new meme
case 'store':
    if(msg.member.roles.cache.some(role => trustedRole.includes(role.id))) {
        if (cmd[1] == null) {
            if (msg.attachments.size == 0) {
                msg.delete();
                msg.channel.send({
                    embed: {
                        color: "#ff0000",
                        description: "***You can't store nothing !***",
                        footer: {
                            text: 'This message will be automatically deleted in 10 seconds',
                        },
                    }
                }).then(msg => msg.delete({timeout: 10000}));
            }
            else {
                msg.attachments.forEach(attachment => {
                    const ImageLink = attachment.proxyURL;
                    if (!memeURL.includes(ImageLink)) {
                        memeURL.push(ImageLink);
                        let store_meme = JSON.stringify(memeURL, null, 4);
                        fs.writeFileSync("./memeURL.json", store_meme);
                        msg.delete();
                        msg.channel.send({
                            embed: {
                                color: "#00FF00",
                                description: `***You successfully store a new meme !***`,
                                fields: [
                                    {
                                        name: '\u200b',
                                        value: '**Preview :**',
                                    },
                                ],
                                image: {
                                    url: `${ImageLink}`,
                                },
                                footer: {
                                    text: 'This message will be automatically deleted in 10 seconds',
                                },
                            }
                        }).then(msg => msg.delete({timeout: 10000}));
                    }
                    else {
                        msg.delete();
                        msg.channel.send({
                            embed: {
                                color: "ff0000",
                                description: '***Uh, this meme seems to be already exit.***',
                                footer: {
                                    text: 'This message will be automatically deleted in 10 seconds',
                                },
                            }
                        }).then(msg => msg.delete({timeout: 10000}));
                    };
                });
            }
        }
        else if (cmd[1].substring(0,7) === "http://" || cmd[1].substring(0,8) === "https://") {
            if (!memeURL.includes(cmd[1])) {
                memeURL.push(cmd[1]);
                let store_meme = JSON.stringify(memeURL, null, 4);
                fs.writeFileSync("./memeURL.json", store_meme);
                msg.delete();
                msg.channel.send({
                    embed: {
                        color: "#00FF00",
                        description: `***You successfully store a new meme !***`,
                        fields: [
                            {
                                name: '\u200b',
                                value: '**Preview :**',
                            },
                        ],
                        image: {
                            url: `${cmd[1]}`,
                        },
                        footer: {
                            text: 'This message will be automatically deleted in 10 seconds',
                        },
                    }
                }).then(msg => msg.delete({timeout: 10000}));
            }
            else {
                msg.delete();
                msg.channel.send({
                    embed: {
                        color: "ff0000",
                        description: '***Uh, this meme seems to be already exit.***',
                        footer: {
                            text: 'This message will be automatically deleted in 10 seconds',
                        },
                    }
                }).then(msg => msg.delete({timeout: 10000}));
            };
        }
        else {
            msg.delete();
            msg.channel.send({
                embed: {
                    color: "ff0000",
                    description: "***Sorry, you can only store an URL of an picture or directly send an attachment.***\n\n**Example usage (URL) :**\nA store <http://meme1.png>\nA store <https://meme2.jpg>",
                    footer: {
                        text: 'This message will be automatically deleted in 20 seconds',
                    },
                }
            }).then(msg => msg.delete({timeout: 20000}));
        };
    }
    else {
        msg.delete();
        msg.channel.send({
            embed: {
                color: "ff0000",
                description: "***Sorry, you don't have permission to add an new meme.***",
                footer: {
                    text: 'This message will be automatically deleted in 10 seconds',
                },
            }
        }).then(msg => msg.delete({timeout: 10000}));
    };
    break;
*/

//Site down
/*
//Joke
case 'joke':
    request(`https://official-joke-api.appspot.com/jokes/random`,
        (error, response, body) => {
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
                msg.channel.send(`**${data.setup}**`);
                setTimeout(function () {
                    msg.channel.send(`***${data.punchline}***`);
                }, 5000);
            };
        });
    break;
*/


/*
///Meme (SquadBot)///     Done !!!!
if (msg.content.startsWith(prefix.SquadBot)) {
    const arg = msg.content.substring(prefix.SquadBot.length).split(' ');
    switch (arg[0]) {
        //Ping
        case 'gnip':
            msg.channel.send('! gnop');
            break;

        //Joke
        case 'joke':
            request(`https://official-joke-api.appspot.com/jokes/random`,
            (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    var data = JSON.parse(body);
                    msg.channel.send(`**${data.setup}**`);
                    setTimeout(function(){
                        msg.channel.send(`***${data.punchline}***`);
                    }, 5000);
                };
            });
            break;
    };
};
*/

//Basic
/*
case '課表':
    var day = dateObject.getDay()  //星期 0~5
    if (day > '0' & day < '6') {
        if (day == 1) {
            msg.channel.send(time_TW());
            msg.channel.send(emb_timetablemonall);
            break;
        }
        else if (day == 2) {
            msg.channel.send(time_TW());
            msg.channel.send(emb_timetabletueall);
            break;
        }
        else if (day == 3) {
            msg.channel.send(time_TW());
            msg.channel.send(emb_timetablewedall);
            break;
        }
        else if (day == 4) {
            msg.channel.send(time_TW());
            msg.channel.send(emb_timetablethuall);
            break;
        }
        else if (day == 5) {
            msg.channel.send(time_TW());
            msg.channel.send(emb_timetablefriall);
            break;
        }
    }
    else {
        msg.reply('今天不用上課啦\n||ばか。。。||\n不過還是給你看一下課表好了');
        await delay(3000);
        msg.channel.send('https://cdn.discordapp.com/attachments/864239176605499412/868548576572235806/739564238ce2c7c2.png');
        break;
    };
*/