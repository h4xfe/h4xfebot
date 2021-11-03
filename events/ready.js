const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "Discord : h4xfe#1903",
        "ᴅᴇᴠᴇʟᴏᴘɪɴɢ ʙʏ ᴇᴍɪʀ",
        "ᴏɴʟɪɴᴇ"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "h4xfe#1903" );
        }, 2 * 2500);
  
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${chalk.green("BOT: Aktif, Komutlar yüklendi!")}`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${chalk.yellow(`BOT: ${client.user.username} ismi ile giriş yapıldı!`)}`);
  client.user.setStatus("online");
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${chalk.red("BOT: Oyun ismi ayarlandı!")} `);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${chalk.cyan(`BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`)}`);


  const channel = client.channels.get("905228784238743623");
  if (!channel) return console.error("Kanal bulunamadı!");
  channel.join().then(connection => {
    console.log("$ Sesli sohbet kanalına başarılı!");
  }).catch(e => {
    console.error(e);
  });

};