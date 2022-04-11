//////////////////////////////////////////////////SETUP//////////////////////////////////////////////////
const login_info = 'Heroku' //可修改  (Heroku/Terminal)
const version = '3.7.1' //可修改  (版本)

import base64 from 'hi-base64';
import rot from 'rot';
import Discord from 'discord.js';
const client = new Discord.Client();
import * as prefix from './prefix.js';
import request from 'request';
import cheerio from 'cheerio';
import prettyMS from 'pretty-ms';

//Server ID//
const AAAADiscordBot = '864375027935608852';
const 玩WB的台灣人 = '849308660886929448';

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

//隨機取數//
function getRandom(x) {
    return Math.floor(Math.random() * x);
};

//登入資訊
if (login_info === 'Terminal') {
    const auth = require('./auth');
    client.login(auth.key);
}
else if (login_info === 'Heroku') {
    client.login(process.env.DJS_TOKEN);
};
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Login platform = ${login_info}`);
    console.log(`V ${version}`);
});
////////////////////////////////////////////////SETUPEND/////////////////////////////////////////////////


///////////////Embed///////////////
////時間////
///UTC+0///
function time() {
    const emb_time = new Discord.MessageEmbed()
        .setColor('#4169e1')
        .setTitle(`目前時間 : ${Wtime()}\n:3`);
    return emb_time;
};
///UTC+8///
function time_TW() {
    const emb_time_TW = new Discord.MessageEmbed()
        .setColor('#4169e1')
        .setTitle(`目前時間 : ${TWtime()}\n:3`);
    return emb_time_TW;
};

////Thx////
const emb_thx = new Discord.MessageEmbed()
    .addFields(
        { name: '\u200B', value: '**Developer**' },
        { name: '𝕷𝖊𝖌𝖊𝖓𝖉•SHARK', value: '\u200B', inline: true },
        { name: '꧁AAAA꧂', value: '\u200B', inline: true },
        { name: '\u200B', value: '**Special Thanks to**' },
        { name: 'DaVince', value: '\u200B', inline: true },
    );

////課表////
////科學班題目////
//110//
const emb_S110 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('110 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全)')
    .addFields({ name: `\u200B`, value: '**[Google Drive](https://reurl.cc/MADO14)**' })
    .addFields({ name: `\u200B`, value: '**[直接下載](https://reurl.cc/YOQ45L)**' })
//109//
const emb_S109 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('109 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全科)')
    .addFields({ name: `\u200B`, value: '**[Google Drive](https://reurl.cc/DgDj16)**' })
    .addFields({ name: `\u200B`, value: '**[直接下載](https://reurl.cc/7rl4aN)**' })
//108//
const emb_S108 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('108 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全科)')
    .addFields({ name: `\u200B`, value: '**[Google Drive](https://reurl.cc/qgXVDn)**' })
    .addFields({ name: `\u200B`, value: '**[直接下載](https://reurl.cc/eEaGRW)**' })
//107//
const emb_S107 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('107 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全科)')
    .addFields({ name: `\u200B`, value: '**[Google Drive](https://reurl.cc/zeX1ya)**' })
    .addFields({ name: `\u200B`, value: '**[直接下載](https://reurl.cc/MAD6pL)**' })
//106//
const emb_S106 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('106 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全科)')
    .addFields({ name: `\u200B`, value: '**[Google Drive](https://reurl.cc/KALb2j)**' })
    .addFields({ name: `\u200B`, value: '**[直接下載](https://reurl.cc/VEQDWn)**' })

////數資班題目////
////109////
//生物//
const emb_M109B = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('109 學年數資班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('生物')
    .addFields({ name: `第一階段`, value: '**[Google Drive](https://example.com)** \n **[直接下載](https://example.com)**' })
    .addFields({ name: `第二階段`, value: '**[Google Drive](https://example.com)** \n **[直接下載](https://example.com)**' })
//地科//
const emb_M109G = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('109 學年數資班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('地科')
    .addFields({ name: `第一階段`, value: '**[Google Drive](https://example.com)**' })
    .addFields({ name: `\u200B`, value: '**[直接下載](https://example.com)**' })
    .addField('\u200B', '\u200B')
    .addFields({ name: `第二階段`, value: '**[Google Drive](https://example.com)**' })
    .addFields({ name: `\u200B`, value: '**[直接下載](https://example.com)**' })

//client.on('message', async msg => {
//    if (msg.content.toLowerCase().includes('spam')) {
//        msg.reply('飲酒過量，有害（礙）健康。\n酒後不開車，安全有保障。\n飲酒過量，害人害己。\n未滿十八歲禁止飲酒。\n短時間內大量灌酒會使人立即喪命。\n||I love to spam||')
//    }
//})


client.on('message', async msg => {
    ////前置判斷////
    try {
        if (!msg.guild || !msg.member) return;
        if (!msg.member.user) return;
        if (msg.member.user.bot) return;
    } catch (err) {
        return;
    };

    ////文字分析////
    ///Easter Egg///
    if (msg.content === '老婆') {
        msg.reply('你沒有老婆!!')
    };
    if (msg.content.toLowerCase() === 'trash') {
        msg.reply('你才是 ! ! !')
    };
    if (msg.content.toLowerCase().includes('酒')) {
        msg.channel.send(`${msg.member.user}你又喝酒了?\n\n溫馨提醒 : 飲酒過量，有害健康。酒後不開 Discord，安全有保障。\n喔還有，"喝 Discord 不用酒，用酒不喝 Discord。" 嗝~(醉倒)`)
    };
    if (msg.content.toLowerCase().includes('掰')) {
        msg.channel.send('https://cdn.discordapp.com/attachments/874654634533343232/875270242031517726/sticker--.png')
    };
    if (msg.content.toLowerCase() === 'hi' || msg.content.toLowerCase() === 'hello') {
        msg.channel.send('Hello,' + `${msg.member.user}` + '，今天心情如何呀?')
        msg.channel.send('https://cdn.discordapp.com/attachments/874654634533343232/875182203322122250/sticker_26.png')
    };

    ////字串分析////
    try {
        ///Admin///
        if (msg.content.startsWith(process.env.DJS_Admin_Prefix)) {
            const cmd = msg.content.substring(process.env.DJS_Admin_Prefix.length).split(' ');
            if (adminUser.includes(msg.author.id)) {
                switch (cmd[0]) {
                    //Delete message//
                    case 'clear':
                        if (cmd[1] == null) {
                            msg.delete();
                            msg.channel.bulkDelete(2).then(() => {
                                msg.channel.send({
                                    embed: {
                                        color: "#00FF00",
                                        description: "***Successfully deleted `1` message !***",
                                        footer: {
                                            text: 'This message will be automatically deleted in 5 seconds',
                                        },
                                    }
                                }).then(msg => msg.delete({ timeout: 5000 }));
                            });
                        }
                        else if (cmd[1] === 'all') {
                            msg.delete();
                            msg.channel.send({
                                embed: {
                                    color: "#ff0000",
                                    description: "***Try to use the command \`delete\` insted of \`clear\`***",
                                    footer: {
                                        text: 'This operation will be automatically cancelled in 5 seconds.',
                                    },
                                }
                            }).then(msg => msg.delete({ timeout: 5000 }));
                        }
                        else {
                            if (cmd[1] > 99) {
                                msg.delete();
                                msg.channel.send({
                                    embed: {
                                        color: "#ff0000",
                                        description: "***You can't delete more than \`99\` message***",
                                        footer: {
                                            text: 'This operation will be automatically cancelled in 5 seconds.',
                                        },
                                    }
                                }).then(msg => msg.delete({ timeout: 5000 }));
                            }
                            else {
                                var deleteAmount = parseInt(cmd[1], 10);
                                msg.delete();
                                msg.channel.bulkDelete(deleteAmount + 1).then(() => {
                                    msg.channel.send({
                                        embed: {
                                            color: "#00FF00",
                                            description: `***Successfully deleted \`${deleteAmount}\` messages !***`,
                                            footer: {
                                                text: 'This message will be automatically deleted in 5 seconds',
                                            },
                                        }
                                    }).then(msg => msg.delete({ timeout: 5000 }));
                                });
                            };
                        }
                        break;

                    //Clone channel//
                    case 'clone':
                        msg.delete();
                        msg.channel.clone(undefined, true, false, 'Needed a clone');
                        msg.channel.send({
                            embed: {
                                color: "#00FF00",
                                description: `***${msg.author} have cloned this channel !***`,
                                footer: {
                                    text: 'This message will be automatically deleted in 5 seconds.',
                                },
                            }
                        }).then(msg => msg.delete({ timeout: 5000 }));
                        break;

                    //Delete channel//
                    case 'delete':
                        msg.delete();
                        msg.channel.send({
                            embed: {
                                color: "#ff0000",
                                description: '***Are you sure that you want to delete this channel ?***',
                                footer: {
                                    text: 'This operation will be automatically cancelled in 10 seconds.',
                                },
                            }
                        }).then(msg => msg.delete({ timeout: 10000 }));
                        var filter = m => m.author.id === msg.author.id;
                        var collector_wanttodelete = new Discord.MessageCollector(msg.channel, filter, { max: 1, time: 10000 });
                        collector_wanttodelete.on('collect', m => {
                            collector_wanttodelete.stop();
                            if (m.content == 'yes') {
                                msg.channel.send({
                                    embed: {
                                        color: "#ff0000",
                                        description: '***This channel will be deleted in 5 seconds, type any word to cancel it.***',
                                    }
                                });
                                var sameuser = m => m.author.id === msg.author.id;
                                var collector_wanttodelete2 = new Discord.MessageCollector(msg.channel, sameuser, { max: 1, time: 10000 });
                                collector_wanttodelete2.on('collect', m => {
                                    collector_wanttodelete2.stop();
                                    if (m.content) {
                                        msg.channel.send({
                                            embed: {
                                                color: "#00FF00",
                                                description: '***The operation has been cancelled !***',
                                                footer: {
                                                    text: 'This message will be automatically deleted in 10 seconds.',
                                                },
                                            }
                                        }).then(msg => msg.delete({ timeout: 10000 }));
                                    };
                                });
                                collector_wanttodelete2.on('end', m => {
                                    collector_wanttodelete2.stop();
                                    if (m.size < 1) {
                                        msg.channel.send({
                                            embed: {
                                                color: "#00FF00",
                                                description: '***Deleting this channel !***',
                                            }
                                        }).then(msg => msg.channel.delete({ timeout: 2000 }));
                                    };
                                });
                            }
                            else if (m.content != 'yes') {
                                collector_wanttodelete.stop();
                                msg.channel.send({
                                    embed: {
                                        color: "#00FF00",
                                        description: '***The operation has been cancelled because of an error.***',
                                        footer: {
                                            text: 'This message will be automatically deleted in 10 seconds.',
                                        },
                                    }
                                }).then(msg => msg.delete({ timeout: 10000 }));
                            };
                        });
                        collector_wanttodelete.on('end', m => {
                            collector_wanttodelete.stop();
                            if (m.size < 1) {
                                msg.channel.send({
                                    embed: {
                                        color: "#00FF00",
                                        description: '***The operation has been cancelled because of timeout.***',
                                        footer: {
                                            text: 'This message will be automatically deleted in 10 seconds.',
                                        },
                                    }
                                }).then(msg => msg.delete({ timeout: 10000 }));
                            };
                        });
                        break;
                };
            }
            else {
                msg.delete();
                msg.channel.send({
                    embed: {
                        color: "#ff0000",
                        description: "***Sorry, you don't have permission to use this command.***",
                        footer: {
                            text: 'This message will be automatically deleted in 5 seconds',
                        },
                    }
                }).then(msg => msg.delete({ timeout: 5000 }));
            };
        };

        ///A///
        if (msg.content.startsWith(prefix.A)) {
            const cmd = msg.content.substring(prefix.A.length).split(' ');
            switch (cmd[0]) {
                //Command
                //Test
                case 'ping':
                    msg.channel.send('Caculating ping . . .').then(resultMessage => {
                        const ping = resultMessage.createdTimestamp - msg.createdTimestamp
                        const emb_ping = new Discord.MessageEmbed()
                            .setColor('#4169e1')
                            .setTitle('🏓 Pong !')
                            .setDescription('\u200B')
                            .addFields({ name: `Bot latency :`, value: `\`${ping} ms\`` })
                            .addFields({ name: `API Latency :`, value: `\`${client.ws.ping} ms\`` })
                            .setTimestamp();
                        resultMessage.delete();
                        resultMessage.channel.send(emb_ping);
                    });
                    break;
                case 'time':
                    msg.channel.send(time_TW());
                    break;
                case 'worldtime':
                    msg.channel.send(time());
                    break;
                case 'botinfo':
                    msg.channel.send('看到這行的人可以獲得一塊餅乾 ฅ ^• ω •^ ฅ').then(resultMessage => {
                        const ping = (resultMessage.createdTimestamp - msg.createdTimestamp)
                        const emb_botinfo = new Discord.MessageEmbed()
                            .setColor('#4169e1')
                            .setTitle(`Bot info`)
                            .addFields({ name: `**Login Platform :**`, value: `\`${login_info}\`` })
                            .addFields({ name: `Bot latency :`, value: `\`${ping} ms\`` })
                            .addFields({ name: `API Latency :`, value: `\`${client.ws.ping} ms\`` })
                            .setFooter(`V ${version}\nUptime : ${prettyMS(client.uptime)}`)
                            .setTimestamp();
                        resultMessage.delete();
                        resultMessage.channel.send(emb_botinfo);
                    });
                    break;

                //科學班題目
                case 'S110':
                    msg.channel.send(emb_S110);
                    break;
                case 'S109':
                    msg.channel.send(emb_S109);
                    break;
                case 'S108':
                    msg.channel.send(emb_S108);
                    break;
                case 'S107':
                    msg.channel.send(emb_S107);
                    break;
                case 'S106':
                    msg.channel.send(emb_S106);
                    break;
                //數資班題目
                case 'M109生':
                    msg.channel.send(emb_M109B);
                    break;
                case 'M109地':
                    msg.channel.send(emb_M109G);
                    break;

                //Base64 encode/decode
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

                //Rot rotational letter substitution
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

                //Post an invite link
                case 'invite':
                    let invite_minutes = cmd[1];
                    let invite_people = cmd[2];
                    msg.delete();
                    if (invite_minutes) {
                        if (invite_people) {
                            if (invite_minutes > 60) {
                                msg.reply("You can't make the invite expires longer than 60 minutes !").then(msg => { setTimeout(() => msg.delete(), 5000) });
                            }
                            else if (invite_minutes < 1) {
                                msg.reply("You can't make the invite expires less than 1 minutes !").then(msg => { setTimeout(() => msg.delete(), 5000) });
                            }
                            else if (invite_people < 1) {
                                msg.reply("Number of people to invite can't be less than 1 person !").then(msg => { setTimeout(() => msg.delete(), 5000) });
                            }
                            else {
                                let invite = await msg.channel.createInvite(
                                    {
                                        maxAge: invite_minutes * 60, // maximum time for the invite, in seconds
                                        maxUses: invite_people // maximum times it can be used
                                    },
                                    `Requested with command by ${msg.author.tag}`
                                ).catch(console.log);
                                msg.channel.send(invite ? {
                                    embed: {
                                        color: "#00FF00",
                                        description: `***Here's your invite:***\n\n<${invite}>\n\nThe invite will be expire in \`${invite_minutes}\` minute(s), this invite can only be used \`${invite_people}\` time(s).`,
                                        footer: {
                                            text: 'This message will be automatically deleted in 30 seconds.',
                                        },
                                    }
                                } : "There has been an error during the creation of the invite.").then(msg => { setTimeout(() => msg.delete(), 30000) });
                            };
                        }
                        else {
                            msg.channel.send({
                                embed: {
                                    color: "#ff0000",
                                    description: "***Number of people to invite can only be integer !***\n\n**Example usage (Expire time = 10 minutes, Amount can be use = 1 time):**\n\`A invite 10 1\`",
                                    footer: {
                                        text: 'This message will be automatically deleted in 10 seconds.',
                                    },
                                }
                            }).then(msg => msg.delete({ timeout: 10000 }));
                        };
                    }
                    else {
                        msg.channel.send({
                            embed: {
                                color: "#ff0000",
                                description: "***Expire time can only be integer between 0 and 61 !***\n\n**Example usage (Expire time = 10 minutes, Amount can be use = 1 time):**\n\`A invite 10 1\`",
                                footer: {
                                    text: 'This message will be automatically deleted in 10 seconds',
                                },
                            }
                        }).then(msg => msg.delete({ timeout: 10000 }));
                    };
                    break;
                case 'invitebot':
                    msg.channel.send({
                        embed: {
                            color: "#00FF00",
                            description: "***將 AAAA 加入你的伺服器吧 ~***",
                            fields: [
                                {
                                    name: '邀請連結 :',
                                    value: '**[Add AAAA to your server !](https://discord.com/api/oauth2/authorize?client_id=859355917988397058&permissions=8&scope=bot)**',
                                },
                            ],
                        }
                    });
                    break;
            };
        };


        ///WB///
        if (msg.content.startsWith(prefix.WBStats)) {
            const cmd = msg.content.substring(prefix.WBStats.length).split(' ');
            switch (cmd[0]) {
                ////Command////
                ///Stats///
                //Add new
                case "new":
                    if (cmd[1] == 'help') {
                        msg.channel.send({
                            embed: {
                                color: "#FFFF00",
                                title: "如何連結帳號?",
                                fields: [
                                    {
                                        name: "\u200B",
                                        value: "**1.**進入 [War Brokers 官方網站](https://stats.warbrokers.io/)",
                                    },
                                    {
                                        name: "\u200B",
                                        value: "**2.**在左上角的 Player Search 搜尋框中輸入您遊戲中的名字",
                                    },
                                    {
                                        name: "\u200B",
                                        value: "**3.**在搜尋結果中選擇您的名字，點擊之後會進入您的玩家頁面",
                                    },
                                    {
                                        name: "\u200B",
                                        value: "**4.**複製視窗上方的網址，回到 Discord 中",
                                    },
                                    {
                                        name: "\u200B",
                                        value: "**5.**輸入 `WB new <頁面網址>` (用您複製的內容取代 `<頁面網址>`)\n舉例:\n`WB new https://stats.warbrokers.io/players/i/5de3a718bfea714d3b292bcb`",
                                    },
                                    {
                                        name: "\u200B",
                                        value: "**6.**恭喜完成帳號連結~ 您現在可以使用 `kd` 指令來查看自己的 KD\n",
                                    }
                                ],
                                footer: {
                                    text: "P.S. 別忘了檢查機器人回傳的網址是否正確喔~",
                                }
                            }
                        });
                    }
                    else {
                        if (!cmd[1]) {
                            msg.channel.send({
                                embed: {
                                    color: "#ff0000",
                                    title: "***You can only store an URL of your War Brokers stats.***",
                                    description: "**Example usage:**\n`WB new https://stats.warbrokers.io/players/i/5de3a718bfea714d3b292bcb`",
                                }
                            });
                            return;
                        }
                        else {
                            var URL = cmd[1].toString();
                            if (cmd[1].substring(0, 8) === "https://") {
                                msg.delete();
                                let gameID = URL.substring(38, 62);
                                let authorName = msg.author.username;
                                let authorID = msg.author.id;
                                msg.channel.send({
                                    embed: {
                                        color: "#FF0000",
                                        title: `Processing ...`,
                                        footer: {
                                            text: "Please wait for a while ...",
                                        }
                                    }
                                }).then(preMessage => {
                                    func.storegameID(authorID, gameID).then(errcode => {
                                        switch (errcode) {
                                            case 0:
                                                preMessage.delete();
                                                preMessage.channel.send({
                                                    embed: {
                                                        color: "#FF0000",
                                                        title: `***Command failed with unexpected error !***`,
                                                        footer: {
                                                            text: "Please contact `꧁AAAA꧂#2713` is kept facing this error"
                                                        }
                                                    }
                                                });
                                                break;

                                            case 1:
                                                request(`https://stats.warbrokers.io/players/i/${gameID}`, (error, response, html) => {
                                                    let $ = cheerio.load(html);
                                                    const gameName_long = $("head > title").text().toString();
                                                    const gameName = gameName_long.replace(' - War Brokers', '');
                                                    preMessage.delete();
                                                    preMessage.channel.send({
                                                        embed: {
                                                            color: "#00FF00",
                                                            title: `***Congrats ${authorName} !***\n**Successfully store your stats page !**`,
                                                            fields: [
                                                                {
                                                                    name: "This is your stats page :",
                                                                    value: `[${gameName}](https://stats.warbrokers.io/players/i/${gameID})`,
                                                                }
                                                            ],
                                                            footer: {
                                                                text: "Please check if this is the right stats"
                                                            }
                                                        }
                                                    });
                                                });
                                                break;

                                            case 2:
                                                request(`https://stats.warbrokers.io/players/i/${gameID}`, (error, response, html) => {
                                                    let $ = cheerio.load(html);
                                                    const gameName_long = $("head > title").text().toString();
                                                    const gameName = gameName_long.replace(' - War Brokers', '');
                                                    preMessage.delete();
                                                    preMessage.channel.send({
                                                        embed: {
                                                            color: "#FF0000",
                                                            title: `We've already stored your stats !`,
                                                            fields: [
                                                                {
                                                                    name: "This is your stats page :",
                                                                    value: `[${gameName}](https://stats.warbrokers.io/players/i/${gameID})`,
                                                                }
                                                            ],
                                                            footer: {
                                                                text: "Please check if this is the right stats"
                                                            }
                                                        }
                                                    });
                                                });
                                                break;

                                            default:
                                                preMessage.delete();
                                                preMessage.channel.send({
                                                    embed: {
                                                        color: "#FF0000",
                                                        title: `***Command failed with unexpected error !***`,
                                                        footer: {
                                                            text: "Please contact `꧁AAAA꧂#2713` is kept facing this error"
                                                        }
                                                    }
                                                });
                                                break;
                                        };
                                    });
                                });
                            }
                            else {
                                msg.channel.send({
                                    embed: {
                                        color: "#ff0000",
                                        title: "***You can only store an URL of your War Brokers stats.***",
                                        description: "**Example usage:**\n`WB new https://stats.warbrokers.io/players/i/5de3a718bfea714d3b292bcb`",
                                    }
                                });
                            };
                        }
                    };
                    break;
            };
        };


        ///KD///
        if (msg.content.toLowerCase().startsWith(prefix.KD)) {
            msg.delete();
            let authorName = msg.author.username;
            let authorID = msg.author.id;
            msg.channel.send({
                embed: {
                    color: "#FF0000",
                    description: '***This might take a few seconds . . .***',
                }
            }).then(preMessage => {
                func.readgameID(authorID).then(callback => {
                    switch (callback.errcode) {
                        case 0:
                            preMessage.delete();
                            preMessage.channel.send({
                                embed: {
                                    color: "#FF0000",
                                    title: `***Command failed with unexpected error !***`,
                                    footer: {
                                        text: "Please contact `꧁AAAA꧂#2713` is kept facing this error"
                                    }
                                }
                            });
                            break;

                        case 1:
                            request(`https://stats.warbrokers.io/players/i/${callback.gameID}`, (error, response, html) => {
                                if (!error && response.statusCode == 200) {
                                    let $ = cheerio.load(html);
                                    let gameName_long = $("head > title").text().toString();
                                    let gameName = gameName_long.replace(' - War Brokers', '');
                                    let kills = $("#player-details-summary-grid > div:nth-child(2) > div.player-details-number-box-value").text().replace(/,/g, "").replace(/\n/g, "").replace(/ /g, "");
                                    let deaths = $("#player-details-summary-grid > div:nth-child(3) > div.player-details-number-box-value").text().replace(/,/g, "").replace(/\n/g, "").replace(/ /g, "");
                                    let currentKD = (kills / deaths);
                                    let rounded_currentKD = Math.round(currentKD * 10) / 10;
                                    let nextKD = (rounded_currentKD + 0.05);
                                    let neededKills = (nextKD * deaths - kills);
                                    let rounded_neededKills = Math.round(neededKills * 1) / 1;
                                    let KDdrop = (rounded_currentKD - 0.06);
                                    let neededDeaths = (kills / KDdrop - deaths);
                                    let rounded_neededDeaths = Math.round(neededDeaths * 1) / 1;
                                    var emb_KD = new Discord.MessageEmbed()
                                        .setColor('#fccbcb')
                                        .setTitle(`玩家名稱 : ${gameName}`)
                                        .addFields(
                                            {
                                                name: ('您的 KD 值 : `' + rounded_currentKD + '`'),
                                                value: (`您需要 \`${rounded_neededKills}\` 次擊殺來增加 KD 值\n您可以在 KD 值下降之前死亡 \`${rounded_neededDeaths}\` 次`),
                                                inline: true
                                            },
                                            {
                                                name: ('目前狀況 :'),
                                                value: (`擊殺次數 = \`${kills}\`\n死亡次數 = \`${deaths}\``),
                                            },
                                            {
                                                name: ("這是您的完整統計數據 :"),
                                                value: (`[${gameName}](https://stats.warbrokers.io/players/i/${callback.gameID})`),
                                            },
                                        );
                                    preMessage.edit(`${authorName}, 這是您的 KD 數據`);
                                    preMessage.channel.send(emb_KD);
                                };
                            });
                            break;

                        case 2:
                            preMessage.edit({
                                embed: {
                                    color: "#ff0000",
                                    title: "***您似乎尚未連結帳號 ?***",
                                    fields: [
                                        {
                                            name: "**連結方式 :**",
                                            value: "WBnew <頁面網址>",
                                        },
                                        {
                                            name: "**舉例 :**",
                                            value: "`WB new https://stats.warbrokers.io/players/i/5de3a718bfea714d3b292bcb`",
                                        },
                                        {
                                            name: "***需要幫助 ?***",
                                            value: "輸入 `WBnew help` 以獲得更多資訊",
                                        }
                                    ]
                                }
                            });
                            break;

                        default:
                            preMessage.delete();
                            preMessage.channel.send({
                                embed: {
                                    color: "#FF0000",
                                    title: `***Command failed with unexpected error !***`,
                                    footer: {
                                        text: "Please contact `꧁AAAA꧂#2713` is kept facing this error"
                                    }
                                }
                            });
                            break;
                    };
                });
            });
        };

        ///S///
        if (msg.content.startsWith(prefix.S)) {
            var pre_suggestion = msg.content
            var suggestion = pre_suggestion.slice(-(pre_suggestion.length - 2));
            msg.delete({ timeout: 0 });
            msg.channel.send('```----------- Suggestion -----------```');
            msg.channel.send('> ' + suggestion + '\n' + '    Submitted by ' + msg.author.toString()).then((msg) => {
                msg.react("👍");
                msg.react("👎");
            });
        };


        ///卡片///
        if (msg.content.startsWith('卡片 ')) {
            var friendzone = msg.content.toString();
            msg.delete({ timeout: 0 });
            var friend = friendzone.slice(-(friendzone.length - 3));
            msg.channel.send(`${friend}我很抱歉，但${msg.member.user}似乎給你發了一張卡片`);
            if (getRandom(3) == 0) {
                msg.channel.send(`https://cdn.discordapp.com/attachments/874654634533343232/874657393357750312/1.jpg`);
            }
            else if (getRandom(3) == 1) {
                msg.channel.send(`https://cdn.discordapp.com/attachments/874654634533343232/874657429634285598/2.png`);
            }
            else if (getRandom(3) == 2) {
                msg.channel.send(`https://cdn.discordapp.com/attachments/874654634533343232/874657464560275626/070334418cadc60c.png`);
                if (getRandom(5) == 3) {
                    msg.channel.send('我要先去洗個澡\n     `C.H.N [2021.08.10 16:44]`')
                }
            };
        };

        ///
        if (msg.content.startsWith('嘿')) {
            var content = msg.content.toString();
            msg.delete({ timeout: 0 });
            if (content.length > 1) {
                var user = content.slice(-(content.length - 1));
                msg.channel.send(`嘿 ${user}`);
            }
            else {
                msg.channel.send('嘿 <@859327109679546418>');
            }
        };

        ///
        switch (msg.content) {
            case 'emm':
                msg.channel.send('<@859327109679546418> 好色喔');
                break;
            case '爛':
                msg.channel.send('<@859327109679546418> 好爛');
                break;
            case '早安':
                if (msg.guild.id == 玩WB的台灣人) {
                    msg.channel.send(`早安~ ${msg.member.user}  ,愛麗絲 妳別激動 . . .`);
                }
                else {
                    msg.channel.send(`早安~ ${msg.member.user}`);
                };
                msg.channel.send('https://cdn.discordapp.com/attachments/874654634533343232/875181934802792459/sticker_9.png');
                break;
            case '午安':
                msg.channel.send(`加油 ${msg.member.user} ，剩下半天了!`);
                if (msg.guild.id == 玩WB的台灣人) {
                    msg.channel.send(`愛麗絲 你有空嗎?  我們去喝茶 ~`)
                    msg.channel.send('https://cdn.discordapp.com/attachments/874654634533343232/875194906778411048/sticker_49.png')
                };
                break;
            case '晚安':
                msg.channel.send(`晚安~ ${msg.member.user}`);
                msg.channel.send('https://cdn.discordapp.com/attachments/874654634533343232/875195042908753920/sticker_83.png');
                if (msg.guild.id == 玩WB的台灣人) {
                    msg.channel.send(`愛麗絲 該吃藥了(拉走)`)
                    msg.channel.send('https://cdn.discordapp.com/attachments/874654634533343232/875195937344061470/sticker_36.png');
                };
                break;
        }

        ///
        if (msg.content.includes('你好瑟喔')) {
            if (getRandom(3) == 0) {
                msg.channel.send('<@859327109679546418> 不可以瑟瑟');
            }
            else {
                msg.channel.send('<@750203298623127623> 不可以瑟瑟');
            };
        };

    } catch (err) {
        console.log('OnMessageError', err);
    };
});