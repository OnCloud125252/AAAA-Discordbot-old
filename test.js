/////////////////////////////////////////////
//                                         //
//   This is the beta version of the bot   //
//                                         //
/////////////////////////////////////////////

//////////////////////////////////////////////////SETUP//////////////////////////////////////////////////
const login_info = 'Terminal' //可修改  (Heroku/Terminal)
const version = '3.4.2 [b1]' //可修改  (版本)

const Discord = require('discord.js');
const prefix = require('./prefix.js');
const request = require('request');
const cheerio = require('cheerio');
const client = new Discord.Client();
const fs = require('fs');
const { head } = require('request');
const memeURL = require("./memeURL.json");

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
var dateObject = new Date();

function TWtime() {
    let dateObject_TW = new Date().toLocaleString('zh-TW', {timeZone : 'Asia/Taipei'});
    let TimeString = `${dateObject_TW}`;
    return TimeString;
};

function Wtime() {
    let dateObject_W = new Date().toLocaleString('zh-TW', {timeZone : 'Europe/London'});
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
    return Math.floor(Math.random()*x);
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
    console.log("\n");
    console.log("::::::::::::::::::::::::::::::::::::");
    console.log("::                                ::");
    console.log("::   THIS IS THE BETA VERSION !   ::");
    console.log("::                                ::");
    console.log("::::::::::::::::::::::::::::::::::::");
    console.log("\n");
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


/////Program start/////
if (login_info === 'Terminal') {
client.on('message', async msg => {
    ////前置判斷////
    try {
        if (!msg.guild || !msg.member) return;
        if (!msg.member.user) return;
        if (msg.member.user.bot) return;
    } catch (err) {
        return;
    };


//These line will only works when ${login_info} === 'Terminal'///////////////////////////////////////////////////////////////////////////////////////////

function logfile(log) {
    let writelog = `[${TWtime()}]\n   ﹂> ${log}\n`;
    fs.appendFileSync('./log_file.log', writelog);
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
                                .addFields({name: `**Login Platform :**`, value: `\`${login_info}\``})
                                .addFields({name: `Bot latency :`, value: `\`${ping} ms\``})
                                .addFields({name: `API Latency :`, value: `\`${client.ws.ping} ms\``})
                                .setFooter(`V ${version}`)
                                .setTimestamp();
                            resultMessage.delete();
                            resultMessage.channel.send(emb_botinfo);
                        });
                        break;
                    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    case 'log':
                        logfile('Test log');
                        break;
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
                };
        };
    } catch (err) {console.log('OnMessageError', err)};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});
};