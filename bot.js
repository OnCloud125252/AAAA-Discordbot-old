const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

//登入資訊
client.login(auth.key);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

///////////////Embed///////////////
////科學班題目////
//110//
const embedS110 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('110 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全)')
    .addFields({name: `\u200B`, value: '**[Google Drive](https://reurl.cc/MADO14)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://reurl.cc/YOQ45L)**'})
//109//
const embedS109 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('109 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全科)')
    .addFields({name: `\u200B`, value: '**[Google Drive](https://reurl.cc/DgDj16)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://reurl.cc/7rl4aN)**'})
//108//
const embedS108 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('108 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全科)')
    .addFields({name: `\u200B`, value: '**[Google Drive](https://reurl.cc/qgXVDn)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://reurl.cc/eEaGRW)**'})
//107//
const embedS107 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('107 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全科)')
    .addFields({name: `\u200B`, value: '**[Google Drive](https://reurl.cc/zeX1ya)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://reurl.cc/MAD6pL)**'})
//106//
const embedS106 = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('106 年科學班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('題目 + 解答 (全科)')
    .addFields({name: `\u200B`, value: '**[Google Drive](https://reurl.cc/KALb2j)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://reurl.cc/VEQDWn)**'})

////數資班題目////
////109////
//生物//
const embedM109B = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('109 學年數資班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('生物')
    .addFields({name: `第一階段`, value: '**[Google Drive](https://example.com)** \n **[直接下載](https://example.com)**'})
    .addFields({name: `第二階段`, value: '**[Google Drive](https://example.com)** \n **[直接下載](https://example.com)**'})
//地科//
const embedM109G = new Discord.MessageEmbed()
    .setColor('#4169e1')
    .setTitle('109 學年數資班甄選')
    .setAuthor('題庫小幫手')
    .setDescription('地科')
    .addFields({name: `第一階段`, value: '**[Google Drive](https://example.com)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://example.com)**'})
    .addField('\u200B', '\u200B')
    .addFields({name: `第二階段`, value: '**[Google Drive](https://example.com)**'})
    .addFields({name: `\u200B`, value: '**[直接下載](https://example.com)**'})

client.on('message', msg => {
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
        if (msg.content.substring(0, prefix.length) === prefix)
        {
            const cmd = msg.content.substring(prefix.length).split(' ');

            switch (cmd[0]) {
                //Basic command
                case 'ping':
                    msg.channel.send('pong !');
                    break;
                //Easter Egg
                case '老婆':
                    msg.reply('你沒有老婆!!');
                    break;
                case 'trash':
                    msg.reply('你才是 ! ! !');
                    break;
                //科學班題目
                case 'S110':
                    msg.channel.send(embedS110);
                    break;
                case 'S109':
                    msg.channel.send(embedS109);
                    break;
                case 'S108':
                    msg.channel.send(embedS108);
                    break;
                case 'S107':
                    msg.channel.send(embedS107);
                    break;
                case 'S106':
                    msg.channel.send(embedS106);
                    break;
                //數資班題目
                case 'M109生':
                    msg.channel.send(embedM109B);
                    break;
                case 'M109地':
                    msg.channel.send(embedM109G);
                    break;
                
            }
        }
    } catch (err) {
        console.log('OnMessageError', err);
    }
});