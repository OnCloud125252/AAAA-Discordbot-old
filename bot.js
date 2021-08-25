//////////////////////////////////////////////////SETUP//////////////////////////////////////////////////
const Discord = require('discord.js');
const prefix = require('./prefix.js');
const request = require('request');
const cheerio = require('cheerio');
const client = new Discord.Client();
var fs = require('fs');
const { head } = require('request');
//client.playerID = require("./playerID.json");
//client.memeURL = require("./memeURL.json");
//client.memeCount = require("./memeCount.json");

//Server ID//
const AAAADiscordBot = 864375027935608852;
const 玩WB的台灣人 = 849308660886929448;

///Time///
var dateObject = new Date();
//var dateObject_TW = new Date().toLocaleString('zh-TW', {timeZone: 'Asia/Taipei'});
//var year = dateObject.getFullYear();  //年(西元) 4digital
//var month = dateObject.getMonth();  //月 0~11
//var date = dateObject.getDate(); //日 1~31
//var day = dateObject.getDay();  //星期 0~5
//var hours = (dateObject.getHours()+8);
//var minutes = dateObject.getMinutes();
//var seconds = dateObject.getSeconds();

function TWtime() {
    let dateObject_TW = new Date().toLocaleString('zh-TW', {timeZone : 'Asia/Taipei'});
    let TimeString = `${dateObject_TW}`;
    return TimeString;
};
function Wtime() {
    let dateObject_W = new Date();
    let TimeString = `${dateObject_W}`;
    return TimeString;
};

//Delay//
function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

//隨機取數//
function getRandom(x){
    return Math.floor(Math.random()*x);
};

//登入資訊
const login_info = 'Heroku' //可修改  (Heroku/Terminal)
const version = '2.3.1' //可修改  (版本)
if (login_info === 'Terminal') {
    const auth = require('./auth.json');
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
        { name: '\u200B', value: '**Special Thanks to**'},
        { name: 'DaVince', value: '\u200B', inline: true },
    );


////課表////
///暑輔///
//Mon//
const emb_timetablemonall = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle(`這是今天的課表`)
    .setAuthor('上課小幫手')
    .setDescription(`\u200B`)
    .addFields({name: `早修\n08:10 ~ 08:20\n梁伶羽`, value: '**[早修](https://meet.google.com/lookup/hisvoo7u3n)**'})
    .addFields({name: `第一節\n08:25 ~ 09:15\n梁伶羽`, value: '**[班會](https://meet.google.com/lookup/hisvoo7u3n)**'})
    .addFields({name: `第二節\n09:25 ~ 10:15\n黃煌興`, value: '**[歷史](https://meet.google.com/lookup/a3o7ew5oxl)**'})
    .addFields({name: `第三節\n10:25 ~ 11:15\n空`, value: '**[空]()**'})
    .addFields({name: `第四節\n11:25 ~ 12:10\n梁伶羽`, value: '**[國文](https://meet.google.com/lookup/hisvoo7u3n)**'})
    .addFields({name: `第五節\n13:25 ~ 14:15\n空`, value: '**[空]()**'})
    .addFields({name: `第六節\n14:25 ~ 15:15\n朱中岳`, value: '**[數學](https://meet.google.com/lookup/gi22oanrh4)**'})
    .addFields({name: `第七節\n15:25 ~ 16:15\n張幸芳`, value: '**[英文](https://meet.google.com/lookup/abcbca6oub)**'})
    .addFields({name: `第八節\n16:25 ~ 17:10\n空`, value: '**[空]()**'})
//Tue//
const emb_timetabletueall = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle(`這是今天的課表`)
    .setAuthor('上課小幫手')
    .setDescription(`\u200B`)
    .addFields({name: `早修\n08:10 ~ 08:20\n梁伶羽`, value: '**[早修](https://meet.google.com/lookup/hisvoo7u3n)**'})
    .addFields({name: `第一節\n08:25 ~ 09:15\n梁伶羽`, value: '**[國文](https://meet.google.com/lookup/hisvoo7u3n)**'})
    .addFields({name: `第二節\n09:25 ~ 10:15\n古鎧榮`, value: '**[公民](https://meet.google.com/lookup/e2x5rtnx5s)**'})
    .addFields({name: `第三節\n10:25 ~ 11:15\n空`, value: '**[空]()**'})
    .addFields({name: `第四節\n11:25 ~ 12:10\n張幸芳`, value: '**[英文](https://meet.google.com/lookup/abcbca6oub)**'})
    .addFields({name: `第五節\n13:25 ~ 14:15\n空`, value: '**[空]()**'})
    .addFields({name: `第六節\n14:25 ~ 15:15\n王姍珮`, value: '**[生物](https://meet.google.com/lookup/dqmzrymccn)**'})
    .addFields({name: `第七節\n15:25 ~ 16:15\n朱中岳`, value: '**[數學](https://meet.google.com/lookup/gi22oanrh4)**'})
    .addFields({name: `第八節\n16:25 ~ 17:10\n空`, value: '**[空]()**'})
//Wed//
const emb_timetablewedall = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle(`這是今天的課表`)
    .setAuthor('上課小幫手')
    .setDescription(`\u200B`)
    .addFields({name: `早修\n08:10 ~ 08:20\n梁伶羽`, value: '**[早修](https://meet.google.com/lookup/hisvoo7u3n)**'})
    .addFields({name: `第一節\n08:25 ~ 09:15\n王妤珊`, value: '**[地理](https://meet.google.com/lookup/agcgvbddej)**'})
    .addFields({name: `第二節\n09:25 ~ 10:15\n張幸芳`, value: '**[英文](https://meet.google.com/lookup/abcbca6oub)**'})
    .addFields({name: `第三節\n10:25 ~ 11:15\n空`, value: '**[空]()**'})
    .addFields({name: `第四節\n11:25 ~ 12:10\n朱中岳`, value: '**[數學](https://meet.google.com/lookup/gi22oanrh4)**'})
    .addFields({name: `第五節\n13:25 ~ 14:15\n空`, value: '**[空]()**'})
    .addFields({name: `第六節\n14:25 ~ 15:15\n曾麟傑`, value: '**[物理](https://meet.google.com/lookup/bywilyby2a)**'})
    .addFields({name: `第七節\n15:25 ~ 16:15\n黃美娟`, value: '**[地科](https://meet.google.com/lookup/agkx73i2bt)**'})
    .addFields({name: `第八節\n16:25 ~ 17:10\n空`, value: '**[空]()**'})
//Thu//
const emb_timetablethuall = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle(`這是今天的課表`)
    .setAuthor('上課小幫手')
    .setDescription(`\u200B`)
    .addFields({name: `早修\n08:10 ~ 08:20\n梁伶羽`, value: '**[早修](https://meet.google.com/lookup/hisvoo7u3n)**'})
    .addFields({name: `第一節\n08:25 ~ 09:15\n王志仁`, value: '**[化學](https://meet.google.com/lookup/fcgwp6ut6z)**'})
    .addFields({name: `第二節\n09:25 ~ 10:15\n梁伶羽`, value: '**[國文](https://meet.google.com/lookup/hisvoo7u3n)**'})
    .addFields({name: `第三節\n10:25 ~ 11:15\n空`, value: '**[空]()**'})
    .addFields({name: `第四節\n11:25 ~ 12:10\n黃煌興`, value: '**[歷史](https://meet.google.com/lookup/a3o7ew5oxl)**'})
    .addFields({name: `第五節\n13:25 ~ 14:15\n空`, value: '**[空]()**'})
    .addFields({name: `第六節\n14:25 ~ 15:15\n古鎧榮`, value: '**[公民](https://meet.google.com/lookup/e2x5rtnx5s)**'})
    .addFields({name: `第七節\n15:25 ~ 16:15\n張幸芳`, value: '**[英文](https://meet.google.com/lookup/abcbca6oub)**'})
    .addFields({name: `第八節\n16:25 ~ 17:10\n空`, value: '**[空]()**'})
//Fri//
const emb_timetablefriall = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle(`這是今天的課表`)
    .setAuthor('上課小幫手')
    .setDescription(`\u200B`)
    .addFields({name: `早修\n08:10 ~ 08:20\n梁伶羽`, value: '**[早修](https://meet.google.com/lookup/hisvoo7u3n)**'})
    .addFields({name: `第一節\n08:25 ~ 09:15\n曾麟傑`, value: '**[物理](https://meet.google.com/lookup/bywilyby2a)**'})
    .addFields({name: `第二節\n09:25 ~ 10:15\n朱中岳`, value: '**[數學](https://meet.google.com/lookup/gi22oanrh4)**'})
    .addFields({name: `第三節\n10:25 ~ 11:15\n空`, value: '**[空]()**'})
    .addFields({name: `第四節\n11:25 ~ 12:10\n王志仁`, value: '**[化學](https://meet.google.com/lookup/fcgwp6ut6z)**'})
    .addFields({name: `第五節\n13:25 ~ 14:15\n空`, value: '**[空]()**'})
    .addFields({name: `第六節\n14:25 ~ 15:15\n王妤珊`, value: '**[地理](https://meet.google.com/lookup/agcgvbddej)**'})
    .addFields({name: `第七節\n15:25 ~ 16:15\n梁伶羽`, value: '**[國文](https://meet.google.com/lookup/hisvoo7u3n)**'})
    .addFields({name: `第八節\n16:25 ~ 17:10\n空`, value: '**[空]()**'})

////科學班題目////
//110//
const emb_S110 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('110 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全)')
    .addFields({name: `\u200B`, value: '**[Google Drive](https://reurl.cc/MADO14)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://reurl.cc/YOQ45L)**'})
//109//
const emb_S109 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('109 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全科)')
    .addFields({name: `\u200B`, value: '**[Google Drive](https://reurl.cc/DgDj16)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://reurl.cc/7rl4aN)**'})
//108//
const emb_S108 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('108 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全科)')
    .addFields({name: `\u200B`, value: '**[Google Drive](https://reurl.cc/qgXVDn)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://reurl.cc/eEaGRW)**'})
//107//
const emb_S107 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('107 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全科)')
    .addFields({name: `\u200B`, value: '**[Google Drive](https://reurl.cc/zeX1ya)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://reurl.cc/MAD6pL)**'})
//106//
const emb_S106 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('106 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全科)')
    .addFields({name: `\u200B`, value: '**[Google Drive](https://reurl.cc/KALb2j)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://reurl.cc/VEQDWn)**'})

////數資班題目////
////109////
//生物//
const emb_M109B = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('109 學年數資班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('生物')
    .addFields({name: `第一階段`, value: '**[Google Drive](https://example.com)** \n **[直接下載](https://example.com)**'})
    .addFields({name: `第二階段`, value: '**[Google Drive](https://example.com)** \n **[直接下載](https://example.com)**'})
//地科//
const emb_M109G = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('109 學年數資班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('地科')
    .addFields({name: `第一階段`, value: '**[Google Drive](https://example.com)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://example.com)**'})
    .addField('\u200B', '\u200B')
    .addFields({name: `第二階段`, value: '**[Google Drive](https://example.com)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://example.com)**'})

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
    }

    ////文字分析////
    ///Easter Egg///
    if (msg.content === '老婆') {
        msg.reply('你沒有老婆!!')
    }
    if (msg.content.toLowerCase() === 'trash') {
        msg.reply('你才是 ! ! !')
    }
    if (msg.content.toLowerCase().includes('酒')) {
        msg.channel.send(`${msg.member.user}你又喝酒了?\n\n溫馨提醒 : 飲酒過量，有害健康。酒後不開 Discord，安全有保障。\n喔還有，"喝 Discord 不用酒，用酒不喝 Discord。" 嗝~(醉倒)`)
    }
    if (msg.content.toLowerCase().includes('等我') || msg.content.toLowerCase().includes('等妳') || msg.content.toLowerCase().includes('等你')) {
        msg.channel.send(`https://cdn.discordapp.com/attachments/874654634533343232/875267221469945866/unknown.png`)
    }
    if (msg.content.toLowerCase().includes(';-;') || msg.content.toLowerCase().includes('哭') || msg.content.includes('QwQ')) {
        msg.channel.send(`${msg.member.user}` + '怎麼了呀?')
        if (getRandom(3) == 0) {
            msg.channel.send('沒事的 乖 XD')
            msg.channel.send('https://cdn.discordapp.com/attachments/874654634533343232/875271795371024415/sticker_-_2021-01-27T115639.087.png')
        }
    }
    if (msg.content.toLowerCase().includes('掰')) {
        msg.channel.send('https://cdn.discordapp.com/attachments/874654634533343232/875270242031517726/sticker--.png')
    }
    if (msg.content.toLowerCase() === 'hi' || msg.content.toLowerCase() === 'hello') {
        msg.channel.send('Hello,' + `${msg.member.user}` + '，今天心情如何呀?')
        msg.channel.send('https://cdn.discordapp.com/attachments/874654634533343232/875182203322122250/sticker_26.png')
    }
    if (msg.content === '早安') {
        await delay(300);
        if (msg.guild.id == 玩WB的台灣人) {
            msg.channel.send(`早安~ ${msg.member.user}  ,愛麗絲 妳別激動 . . .`)
        }
        else {
            msg.channel.send(`早安~ ${msg.member.user}`)
        }
        msg.channel.send('https://cdn.discordapp.com/attachments/874654634533343232/875181934802792459/sticker_9.png')
    }
    if (msg.content === '午安') {
        await delay(300);
        msg.channel.send(`加油 ${msg.member.user} ，剩下半天了!`)
        if (msg.guild.id == 玩WB的台灣人) {
            msg.channel.send(`愛麗絲 你有空嗎?  我們去喝茶 ~`)
            msg.channel.send('https://cdn.discordapp.com/attachments/874654634533343232/875194906778411048/sticker_49.png')
        }
    }
    if (msg.content === '晚安') {
        await delay(300);
        msg.channel.send(`晚安~ ${msg.member.user}`)
        msg.channel.send('https://cdn.discordapp.com/attachments/874654634533343232/875195042908753920/sticker_83.png')
        if (msg.guild.id == 玩WB的台灣人) {
            msg.channel.send(`愛麗絲 該吃藥了(拉走)`)
            msg.channel.send('https://cdn.discordapp.com/attachments/874654634533343232/875195937344061470/sticker_36.png')
        }
    }


    ////字串分析////
    ///A///
    try {
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
                            .addFields({name: `Bot latency :`, value: `**${ping}ms**`})
                            .addFields({name: `API Latency :`, value: `**${client.ws.ping}ms**`})
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
                    msg.channel.send('為啥這一行死不消失 ；-；').then(resultMessage => {
                        const ping = (resultMessage.createdTimestamp - msg.createdTimestamp)
                        const emb_botinfo = new Discord.MessageEmbed()
                            .setColor('#4169e1')
                            .setTitle(`Bot info`)
                            .addFields({name: `**Login info**`, value: `Platform : ${login_info}`})
                            .addFields({name: `Bot latency :`, value: `**${ping}ms**`})
                            .addFields({name: `API Latency :`, value: `**${client.ws.ping}ms**`})
                            .setFooter(`V ${version}`)
                            .setTimestamp();
                        resultMessage.delete();
                        resultMessage.channel.send(emb_botinfo);
                    });
                    break;

                //Basic
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
                    }

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

                //Post an invite link
                case 'invite':
                    let invite_minutes = cmd[1];
                    let invite_people = cmd[2];
                    msg.delete();
                    if (invite_minutes) {
                        if (invite_people) {
                            if (invite_minutes > 60) {
                                msg.reply("You can't make the invite expires longer than 60 minutes").then(msg => {setTimeout(() => msg.delete(), 5000)});
                            }
                            else {
                                let invite = await msg.channel.createInvite(
                                    {
                                    maxAge: invite_minutes * 60 , // maximum time for the invite, in seconds
                                    maxUses: invite_people // maximum times it can be used
                                    },
                                    `Requested with command by ${msg.author.tag}`).catch(console.log);
                                msg.reply(invite ? "Here's your invite: \n\n" + '<' + `${invite}` + '>\n\nThe invite will be expire in `' + `${invite_minutes}` + '` minutes, this invite can only be used `' + `${invite_people}` + '` times.\nP.S. : This message will be automatically deleted in 30 seconds.' : "There has been an error during the creation of the invite.")
                                .then(msg => {setTimeout(() => msg.delete(), 30000)});
                            };
                        }
                        else {
                            msg.reply("Number of people to invite can't be blank !").then(msg => {setTimeout(() => msg.delete(), 5000)});
                        };
                    }
                    else {
                        msg.reply("Expire time can't be blank !").then(msg => {setTimeout(() => msg.delete(), 5000)});
                    };
            };
        };


        ///WB///
        if (msg.content.startsWith(prefix.WBStats)) {
            const cmd = msg.content.substring(prefix.WBStats.length).split(' ');
            switch (cmd[0]) {
                ////Command////
                ///Test///
                case 'ping':
                    msg.channel.send('🏓 Pong !');
                    break;

                ///Stats///
                //Add new
                case 'new':
                    var URL = msg.content.toString();
                    var player_ID = URL.slice(-(URL.length-45));
                    msg.delete({ timeout: 0 });
                    client.playerID = require("./playerID.json");
                    client.playerID[msg.author.id] = {
                        playerID: player_ID,
                    };
                    let stats_URL = client.playerID[msg.author.id].playerID;
                    let author = msg.author.username;
                    fs.writeFile("./playerID.json", JSON.stringify(client.playerID, null, 4), err => {
                        if (err) {
                            throw err;
                        }
                        else {
                            msg.channel.send ({
                                embed: {
                                    color: "#00FF00",
                                    description: `Congrats ${author} !\n\nNow, please check if this is the right stats`,
                                }
                            });
                            msg.channel.send (`https://stats.warbrokers.io/players/i/${stats_URL}`);
                        };
                    });
                    break;

                //Show KD
                case 'KD':
                    msg.channel.send({
                        embed: {
                            color: "ff0000",
                            description: '***This might take a few seconds . . .***',
                        }
                    }).then(msg => msg.delete({timeout:"3000"}));
                    client.playerID = require("./playerID.json");
                    if (!client.playerID[msg.author.id]) {return};
                    var user_ID = client.playerID[msg.author.id].playerID;
                    request(`https://stats.warbrokers.io/players/i/${user_ID}`,
                        (error, response, html) => {
                            if (!error && response.statusCode == 200) {
                                const $ = cheerio.load(html);
                                const name_long = $("head > title").text().toString();
                                const name = name_long.replace(' - War Brokers','');
                                const kills = $("#player-details-summary-grid > div:nth-child(2) > div.player-details-number-box-value").text().replace(/,/g, "").replace(/\n/g, "").replace(/ /g, "");
                                const deaths = $("#player-details-summary-grid > div:nth-child(3) > div.player-details-number-box-value").text().replace(/,/g, "").replace(/\n/g, "").replace(/ /g, "");
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
                                    .setTitle(`Player name : ${name}`)
                                    .addFields(
                                        {
                                            name: ('Your KD is : `' + rounded_currentKD + '`'),
                                            value: ('You need `' + `${rounded_neededKills}` + '` kills to increase KD\nYou can handle `' + `${rounded_neededDeaths}` + '` deaths before your KD drops'),
                                            inline: true
                                        },
                                        {
                                            name: ('Overview :'),
                                            value: ('Kills = `' + `${kills}` + '`\nDeaths = `' + `${deaths}` + '`'),
                                        },
                                        {
                                            name: ("Here's your full stats :"),
                                            value: (`[View full stats of ${msg.author}](https://stats.warbrokers.io/players/i/${user_ID})`),
                                        },
                                    );
                                msg.channel.send(`${msg.author.toString()}, here is your KD`);
                                msg.channel.send(emb_KD);
                            };
                    });
                    break;

                //Show stats
                case 'stats':
                    if (!client.playerID[msg.author.id]) {return};
                    var user_ID = client.playerID[msg.author.id].playerID;
                    msg.channel.send({
                        embed: {
                            color: "0000ff",
                            description: `[Here is your full stats](https://stats.warbrokers.io/players/i/${user_ID})`,
                        }
                    });
                    break;
            };
        };


        ///KD///
        if (msg.content.startsWith(prefix.KD)) {
            msg.channel.send({
                embed: {
                    color: "ff0000",
                    description: '***This might take a few seconds . . .***',
                }
            }).then(msg => msg.delete({timeout:"3000"}));
            client.playerID = require("./playerID.json");
            if (!client.playerID[msg.author.id]) {return};
            var user_ID = client.playerID[msg.author.id].playerID;
            request(`https://stats.warbrokers.io/players/i/${user_ID}`,
                (error, response, html) => {
                    if (!error && response.statusCode == 200) {
                        const $ = cheerio.load(html);
                        const name_long = $("head > title").text().toString();
                        const name = name_long.replace(' - War Brokers','');
                        const kills = $("#player-details-summary-grid > div:nth-child(2) > div.player-details-number-box-value").text().replace(/,/g, "").replace(/\n/g, "").replace(/ /g, "");
                        const deaths = $("#player-details-summary-grid > div:nth-child(3) > div.player-details-number-box-value").text().replace(/,/g, "").replace(/\n/g, "").replace(/ /g, "");
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
                            .setTitle(`玩家名稱 : ${name}`)
                            .addFields(
                                {
                                    name: ('您的 KD 值 : `' + rounded_currentKD + '`'),
                                    value: ('您需要 `' + `${rounded_neededKills}` + '` 次擊殺來增加 KD 值\n您可以在 KD 值下降之前死亡 `' + `${rounded_neededDeaths}` + '` 次'),
                                    inline: true
                                },
                                {
                                    name: ('目前狀況 :'),
                                    value: ('擊殺次數 = `' + `${kills}` + '`\n死亡次數 = `' + `${deaths}` + '`'),
                                },
                                {
                                    name: ("這是您的完整統計數據 :"),
                                    value: (`[View full stats of ${msg.author}](https://stats.warbrokers.io/players/i/${user_ID})`),
                                },
                            );
                        msg.channel.send(`${msg.author.toString()}, 這是您的 KD 數據`);
                        msg.channel.send(emb_KD);
                    };
            });
        };


        ///S///
        if (msg.content.startsWith(prefix.S)){
            var pre_suggestion = msg.content.toString();
            var suggestion = pre_suggestion.slice(-(pre_suggestion.length-2));
            msg.delete({ timeout: 0 });
            msg.channel.send('```----------- Suggestion -----------```');
            msg.channel.send('> ' + suggestion + '\n' + '    Submitted by ' + msg.author.toString()).then((msg) => {
                msg.react("👍");
                msg.react("👎");
            })
        };

        
        ///卡片///
        if (msg.content.startsWith('卡片 ')) {
            var friendzone = msg.content.toString();
            msg.delete({ timeout: 0 });
            var friend = friendzone.slice(-(friendzone.length-3));
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
            }
            //msg.channel.send (CHNcount());
        };


        ///Test///
        if (login_info === 'Terminal') {
        if (msg.content.startsWith(prefix.Test)) {
        const cmd = msg.content.substring(prefix.Test.length).split(' ');
        switch (cmd[0]) {
        //These line will only works when ${login_info} === 'Terminal'///////////////////////////////////////////////////////////////////////////////////////////
        case 'ping':
            msg.channel.send('Caculating ping . . .').then(resultMessage => {
                const ping = resultMessage.createdTimestamp - msg.createdTimestamp
                const emb_ping = new Discord.MessageEmbed()
                    .setColor('#4169e1')
                    .setTitle('🏓 Pong !')
                    .setDescription('\u200B')
                    .addFields({name: `Bot latency :`, value: `**${ping}ms**`})
                    .addFields({name: `API Latency :`, value: `**${client.ws.ping}ms**`})
                    .setTimestamp();
                resultMessage.delete();
                resultMessage.channel.send(emb_ping);
            });
            break;
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        };
        };
        };
        ///


        ///Meme (SquadBot)///     Keep working !!!!
        if (msg.content.startsWith(prefix.SquadBot)) {
            const cmd = msg.content.substring(prefix.SquadBot.length).split(' ');
            switch (cmd[0]) {
                case 'gnip':
                    msg.channel.send('! gnop');
                    break;

            };
        };


    } catch (err) {
        console.log('OnMessageError', err);
    };
});