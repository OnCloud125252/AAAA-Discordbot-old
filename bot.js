//////////////////////////////////////////////////SETUP//////////////////////////////////////////////////
const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
//Time
const dateObject = new Date() //現在時間，範例 Fri Jul 15 2016 16:23:49 GMT+0800 (CST)
const year = dateObject.getFullYear()  //年(西元) 4didital
const month = dateObject.getMonth()  //月 1~11
const date = dateObject.getDate() //日 1~31
const day = dateObject.getDay()  //星期 0~5
//Delay
function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}
////////////////////////////////////////////////SETUPEND/////////////////////////////////////////////////

//登入資訊
client.login(auth.key);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

///////////////Embed///////////////
////課表////
///暑輔///
//Mon//
const embtimetablemon = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle(`目前時間 : ${dateObject}`)
    .setAuthor('上課小幫手')
const embtimetablemonall = new Discord.MessageEmbed()
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
const embtimetabletue = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle(`目前時間 : ${dateObject}`)
    .setAuthor('上課小幫手')
const embtimetabletueall = new Discord.MessageEmbed()
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
const embtimetablewed = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle(`目前時間 : ${dateObject}`)
    .setAuthor('上課小幫手')
const embtimetablewedall = new Discord.MessageEmbed()
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
const embtimetablethu = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle(`目前時間 : ${dateObject}`)
    .setAuthor('上課小幫手')
const embtimetablethuall = new Discord.MessageEmbed()
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
const embtimetablefri = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle(`目前時間 : ${dateObject}`)
    .setAuthor('上課小幫手')
const embtimetablefriall = new Discord.MessageEmbed()
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
const embS110 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('110 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全)')
    .addFields({name: `\u200B`, value: '**[Google Drive](https://reurl.cc/MADO14)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://reurl.cc/YOQ45L)**'})
//109//
const embS109 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('109 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全科)')
    .addFields({name: `\u200B`, value: '**[Google Drive](https://reurl.cc/DgDj16)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://reurl.cc/7rl4aN)**'})
//108//
const embS108 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('108 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全科)')
    .addFields({name: `\u200B`, value: '**[Google Drive](https://reurl.cc/qgXVDn)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://reurl.cc/eEaGRW)**'})
//107//
const embS107 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('107 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全科)')
    .addFields({name: `\u200B`, value: '**[Google Drive](https://reurl.cc/zeX1ya)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://reurl.cc/MAD6pL)**'})
//106//
const embS106 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('106 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全科)')
    .addFields({name: `\u200B`, value: '**[Google Drive](https://reurl.cc/KALb2j)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://reurl.cc/VEQDWn)**'})

////數資班題目////
////109////
//生物//
const embM109B = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('109 學年數資班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('生物')
    .addFields({name: `第一階段`, value: '**[Google Drive](https://example.com)** \n **[直接下載](https://example.com)**'})
    .addFields({name: `第二階段`, value: '**[Google Drive](https://example.com)** \n **[直接下載](https://example.com)**'})
//地科//
const embM109G = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('109 學年數資班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('地科')
    .addFields({name: `第一階段`, value: '**[Google Drive](https://example.com)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://example.com)**'})
    .addField('\u200B', '\u200B')
    .addFields({name: `第二階段`, value: '**[Google Drive](https://example.com)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://example.com)**'})

client.on('message', async msg => {
    //前置判斷
    try {
        if (!msg.guild || !msg.member) return;
        if (!msg.member.user) return;
        if (msg.member.user.bot) return;
    } catch (err) {
        return;
    }

    //字串分析
    try {
        const prefix = 'A '
        if (msg.content.substring(0, prefix.length) === prefix){
            const cmd = msg.content.substring(prefix.length).split(' ');

            switch (cmd[0]) {
                //Command
                //Test
                case 'ping':
                    msg.channel.send('pong !');
                    break;
                //Basic
                case '課表':
                    if (day > '0' & day < '6') {
                        if (day == 1) {
                            msg.channel.send(embtimetablemon);
                            msg.channel.send(embtimetablemonall);
                            break;
                        }
                        else if (day == 2) {
                            msg.channel.send(embtimetabletue);
                            msg.channel.send(embtimetabletueall);
                            break;
                        }
                        else if (day == 3) {
                            msg.channel.send(embtimetablewed);
                            msg.channel.send(embtimetablewedall);
                            break;
                        }
                        else if (day == 4) {
                            msg.channel.send(embtimetablethu);
                            msg.channel.send(embtimetablethuall);
                            break;
                        }
                        else if (day == 5) {
                            msg.channel.send(embtimetablefri);
                            msg.channel.send(embtimetablefriall);
                            break;
                        }
                    }
                    else {
                        msg.reply('今天不用上課啦\n||ばか。。。||\n不過還是給你看一下課表好了');
                        await delay(3000)
                        msg.channel.send('https://cdn.discordapp.com/attachments/864239176605499412/868548576572235806/739564238ce2c7c2.png');
                        break;
                    }

                //Easter Egg
                case '老婆':
                    msg.reply('你沒有老婆!!');
                    break;
                case 'trash':
                    msg.reply('你才是 ! ! !');
                    break;
                //科學班題目
                case 'S110':
                    msg.channel.send(embS110);
                    break;
                case 'S109':
                    msg.channel.send(embS109);
                    break;
                case 'S108':
                    msg.channel.send(embS108);
                    break;
                case 'S107':
                    msg.channel.send(embS107);
                    break;
                case 'S106':
                    msg.channel.send(embS106);
                    break;
                //數資班題目
                case 'M109生':
                    msg.channel.send(embM109B);
                    break;
                case 'M109地':
                    msg.channel.send(embM109G);
                    break;
                
            }
        }
    } catch (err) {
        console.log('OnMessageError', err);
    }
});
