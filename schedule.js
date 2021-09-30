__utmz=71753615.1628817098.41.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not provided); _ga_5Y6KRG8CLT=GS1.1.1628900182.1.1.1628900206.0; __utma=71753615.1146359843.1622767337.1628817098.1630424007.42; _ga=GA1.3.1146359843.1622767337; _gid=GA1.3.1475370579.1630424015; PHPSESSID=l09mcj5dqt1it4gp47vbt9dp72

var loginLink = 'http://www.kicktipp.de/info/profil/login';

// creating a clean jar
var j = request.jar();

request.get({url: loginLink, jar: j}, function(err, httpResponse, html) {
  // place POST request and rest of the code here
});

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


        
function logfile(log) {
  let writelog = `[${TWtime()}]\n   ﹂> ${log}\n`;
  fs.appendFile('./log_file.log', writelog, err => {
      if (err) {
          msg.channel.send ("Error");
          throw err;
      }
      else {
          msg.channel.send ("Success");
      };
  });
};