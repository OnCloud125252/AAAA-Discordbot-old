//////////////////////////////////////////////////SETUP//////////////////////////////////////////////////
const Discord = require('discord.js');
const auth = require('./auth.json'); //Terminal
const data = require('./prefix.js')
const client = new Discord.Client();

//CHN count//
//let chn_count = 0;
//function CHNcount() {
//    let chn_count += 1
//    if (chn_count <= 5) {
//        return chn_count
//    }
//    else {
//        chn_count - 6
//        return chn_count
//    }
//}

///Time///
var dateObject = new Date();
//var dateObject_TW = new Date().toLocaleString('zh-TW', {timeZone: 'Asia/Taipei'});
//var year = dateObject.getFullYear()  //年(西元) 4digital
//var month = dateObject.getMonth()  //月 0~11
//var date = dateObject.getDate() //日 1~31
//var day = dateObject.getDay()  //星期 0~5
//var hours = (dateObject.getHours()+8)
//var minutes = dateObject.getMinutes()
//var seconds = dateObject.getSeconds()

function TWtime() {
    let dateObject_TW = new Date().toLocaleString('zh-TW', {timeZone : 'Asia/Taipei'})
    let TimeString = `${dateObject_TW}`
    return TimeString
}
function Wtime() {
    let dateObject_W = new Date()
    let TimeString = `${dateObject_W}`
    return TimeString
}

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
client.login(process.env.DJS_TOKEN);
//const login_info = 'Heroku' //可修改
//const emb_logininfo = new Discord.MessageEmbed()
//    .setColor('#4169e1')
//    .setTitle(`Bot info`)
//    .setDescription(`\u200B`)
//    .addFields({name: `**Login info**`, value: `Logged in as AAAA#3290 on ${login_info}`})
//if (login_info === 'Terminal') {
//    client.login(auth.key);
//}
//else if (login_info === 'Heroku') {
//    client.login(process.env.DJS_TOKEN);
//}
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
//    console.log(`login info = ${login_info}`);
});
////////////////////////////////////////////////SETUPEND/////////////////////////////////////////////////


///////////////Embed///////////////
////時間////
///UTC+0///
function time() {
    const emb_time = new Discord.MessageEmbed()
        .setColor('#4169e1')
        .setTitle(`目前時間 : ${Wtime()}\n:3`)
    return emb_time
}
///UTC+8///
function time_TW() {
    const emb_time_TW = new Discord.MessageEmbed()
        .setColor('#4169e1')
        .setTitle(`目前時間 : ${TWtime()}\n:3`)
    return emb_time_TW
}

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
    //前置判斷
    try {
        if (!msg.guild || !msg.member) return;
        if (!msg.member.user) return;
        if (msg.member.user.bot) return;
    } catch (err) {
        return;
    }

    //Easter Egg
    if (msg.content === '老婆') {
        msg.reply('你沒有老婆!!')
    }
    if (msg.content.toLowerCase() === 'trash') {
        msg.reply('你才是 ! ! !')
    }
    if (msg.content.toLowerCase().includes('酒')) {
        msg.channel.send(`${msg.member.user}你又喝酒了?\n\n溫馨提醒 : 飲酒過量，有害健康。酒後不開 Discord，安全有保障。\n喔還有，"喝 Discord 不用酒，用酒不喝 Discord。" 嗝~(醉倒)`)
    }

    //文字分析
    if (msg.content.toLowerCase() === 'hi' || msg.content.toLowerCase() === 'hello') {
        msg.channel.send('Hello,' + `${msg.member.user}`)
    }
    if (msg.content === '早安') {
        msg.channel.send(`早安~ ${msg.member.user}`)
    }
    if (msg.content === '午安') {
        msg.channel.send(`午安~ ${msg.member.user}`)
    }
    if (msg.content === '晚安') {
        msg.channel.send(`晚安~ ${msg.member.user}`)
    }

    //字串分析
    try {
        if (msg.content.startsWith(data.A)) {
            const cmd = msg.content.substring(data.A.length).split(' ');
            switch (cmd[0]) {
                //Command
                //Test
                case 'ping':
                    msg.channel.send('pong !');
                    break;
                case 'time':
                    msg.channel.send(time_TW())
                    break;
                case 'botinfo':
                    msg.channel.send(emb_logininfo)
                    break;
                case 'worldtime':
                    msg.channel.send(time())
                    break;
                //Basic
                case '課表':
                    var day = dateObject.getDay()  //星期 0~5
                    if (day > '0' & day < '6') {
                        if (day == 1) {
                            msg.channel.send(time_TW())
                            msg.channel.send(emb_timetablemonall);
                            break;
                        }
                        else if (day == 2) {
                            msg.channel.send(time_TW())
                            msg.channel.send(emb_timetabletueall);
                            break;
                        }
                        else if (day == 3) {
                            msg.channel.send(time_TW())
                            msg.channel.send(emb_timetablewedall);
                            break;
                        }
                        else if (day == 4) {
                            msg.channel.send(time_TW())
                            msg.channel.send(emb_timetablethuall);
                            break;
                        }
                        else if (day == 5) {
                            msg.channel.send(time_TW())
                            msg.channel.send(emb_timetablefriall);
                            break;
                        }
                    }
                    else {
                        msg.reply('今天不用上課啦\n||ばか。。。||\n不過還是給你看一下課表好了');
                        await delay(3000)
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
            }
        }
        if (msg.content.startsWith(data.B)){
            const cmd = msg.content.substring(data.B.length).split(' ');
            switch (cmd[0]) {
                case 'ping':
                    msg.channel.send('pong !');
                    break;
                    
            }
        }

        //建議
        if (msg.content.startsWith(data.S)){
            var pre_suggestion = msg.content.toString();
            var suggestion = pre_suggestion.slice(-(pre_suggestion.length-2));
            msg.delete({ timeout: 0 });
            msg.channel.send('> ' + suggestion + '\n' + '    Submitted by ' + msg.author.username);
        }

        //好人卡
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
            }
            if (getRandom(5) == 3) {
                
            }
            //msg.channel.send (CHNcount())
        }

    } catch (err) {
        console.log('OnMessageError', err);
    }
});