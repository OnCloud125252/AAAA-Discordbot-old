/////////////////////////////////////////////
//                                         //
//   This is the beta version of the bot   //
//                                         //
/////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////SETUP////////////////////////////////////////////////////////////////////////////
const login_info = 'Terminal' //可修改  (Heroku/Terminal)
const version = '3 [b1]' //可修改  (版本)

const base64 = require('hi-base64');
const rot = require('rot');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: (new Discord.Intents()).add(Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_INVITES) });
const prefix = require('./prefix.js');
const request = require('request');
const cheerio = require('cheerio');
const prettyMS = require('pretty-ms');
const fs = require('fs');
const { head } = require('request');
const memeURL = require("./memeURL.json");

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
    const auth = require('./auth.json');
    client.login(auth.key);
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