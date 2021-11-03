
// GEREKLİ OLAN KÜTÜPHANELERİN İSTEK LİSTESİ
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const chalk = require("chalk");
const db = require("quick.db")
const moment = require('moment');
const ayarlar = require("./ayarlar.json");
var prefix = ayarlar.prefix;
require("./util/eventLoader")(client);

const log = message => {
  console.log(`${chalk.yellow(`+`)} ${message}`);
};


//KOMUTLAR KLASÖRÜNDEKİ KOD BLOKLARI BURADAN BOTA ENTEGRE EDİLİR
//YÜKLENEN KOMUTLAR KOMUT PANELİ ÜZERİNDE RENKLİ BİR BİÇİMDE LİSTELENİR
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${chalk.red(files.length)} ${chalk.green("komut yüklenecek.")}`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`${chalk.green("Yüklenen komut:")} ${chalk.blue(props.help.name)}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.english = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  //log(`${chalk.red(files.length)} ${chalk.green("komut yüklenecek.")}`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    //log(`${chalk.green("Yüklenen komut:")} ${chalk.blue(props.help.name)}.`);
    client.english.set(props.help.enname, props);
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);

      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//
// KOMUTLARI KULLANABİLECEK DİSCORD YETKİLERİNİ BURADA BELİRLEDİM
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
    if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 3;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 5;
    if (message.member.hasPermission("MANAGE_ROLES")) permlvl = 4;
      if (message.member.hasPermission("MANAGE_GUILD")) permlvl = 7;
  if (message.author.id === ayarlar.yapımcı) permlvl = 6;
  return permlvl;
};

//
// SUNUCUYA KULLANICI GİRİŞ YAPTIĞINDA OLACAK OLAYLAR BURADA
client.on('guildMemberAdd', async (member, guild, message) => {

  let kayıtsız = await db.fetch(`kayıtsızRol.${member.guild.id}`)
  if (!kayıtsız || kayıtsız.toLowerCase() === 'yok') return;
 else {
  try {
    member.addRole(member.guild.roles.get(kayıtsız))
  }
  catch (e) {
  console.log(e)
 }
 }
 
});

client.on("guildMemberAdd", async (member, message) => {

  let guild = member.guild;
  
  const channel = member.guild.channels.find("name", "🔐・kayıt"); /// Kayıt Kanalının Adını "" İçine Yazınız Örn:registry-chat
  
  if (!channel) return;
  
  
  
  var güvenli = "<a:bTik:777632458141204512>";
  
  
  
  var tarih = "";
  
  if (moment(member.user.createdAt).format("MM") === "01") {
  
    var tarih = `${moment(member.user.createdAt).format("DD")}/01/${moment(
  
      member.user.createdAt
  
    ).format("YYYY HH:mm:ss")} `;
  
  }
  
  if (moment(member.user.createdAt).format("MM") === "02") {
  
    var tarih = `${moment(member.user.createdAt).format("DD")}/02/${moment(
  
      member.user.createdAt
  
    ).format("YYYY HH:mm:ss")} `;
  
  }
  
  if (moment(member.user.createdAt).format("MM") === "03") {
  
    var tarih = `${moment(member.user.createdAt).format("DD")}/03/${moment(
  
      member.user.createdAt
  
    ).format("YYYY HH:mm:ss")} `;
  
  }
  
  if (moment(member.user.createdAt).format("MM") === "04") {
  
    var tarih = `${moment(member.user.createdAt).format("DD")}/04/${moment(
  
      member.user.createdAt
  
    ).format("YYYY HH:mm:ss")} `;
  
  }
  
  if (moment(member.user.createdAt).format("MM") === "05") {
  
    var tarih = `${moment(member.user.createdAt).format("DD")}/05/${moment(
  
      member.user.createdAt
  
    ).format("YYYY HH:mm:ss")} `;
  
  }
  
  if (moment(member.user.createdAt).format("MM") === "06") {
  
    var tarih = `${moment(member.user.createdAt).format("DD")}/06/${moment(
  
      member.user.createdAt
  
    ).format("YYYY HH:mm:ss")} `;
  
  }
  
  if (moment(member.user.createdAt).format("MM") === "07") {
  
    var tarih = `${moment(member.user.createdAt).format("DD")}/07/${moment(
  
      member.user.createdAt
  
    ).format("YYYY HH:mm:ss")} `;
  
  }
  
  if (moment(member.user.createdAt).format("MM") === "08") {
  
    var tarih = `${moment(member.user.createdAt).format("DD")}/08/${moment(
  
      member.user.createdAt
  
    ).format("YYYY HH:mm:ss")} `;
  
  }
  
  if (moment(member.user.createdAt).format("MM") === "09") {
  
    var tarih = `${moment(member.user.createdAt).format("DD")}/09/${moment(
  
      member.user.createdAt
  
    ).format("YYYY HH:mm:ss")} `;
  
  }
  
  if (moment(member.user.createdAt).format("MM") === "10") {
  
    var tarih = `${moment(member.user.createdAt).format("DD")}/10/${moment(
  
      member.user.createdAt
  
    ).format("YYYY HH:mm:ss")} `;
  
  }
  
  if (moment(member.user.createdAt).format("MM") === "11") {
  
    var tarih = `${moment(member.user.createdAt).format("DD")}/11/${moment(
  
      member.user.createdAt
  
    ).format("YYYY HH:mm:ss")} `;
  
  }
  
  if (moment(member.user.createdAt).format("MM") === "12") {
  
    var tarih = `${moment(member.user.createdAt).format("DD")}/12/${moment(
  
      member.user.createdAt
  
    ).format("YYYY HH:mm:ss")} `;
  
  }
  // SUNUCUYA GİRİŞ YAPAN KULLANICILARA ROL VERİP KANALA MESAJ ATMAYI SAĞLAYAN KOD BLOĞU
  const kayitsiz = guild.roles.find("name", "ᴜɴʀᴇɢɪsᴛᴇʀᴇᴅ");
  const embed = new Discord.RichEmbed()
  
    .setColor(0x00ff00)  
    .setAuthor(`${guild.name}`, guild.iconURL)
  
    .setDescription(
  
    `<a:hg:778538501955125248> ** Aramıza Hoşgeldin** <@${member.user.id}> 

    <a:hg:778538501955125248><@${member.user.id}>** kullanıcısına <@&${kayitsiz.id}> Rolü verildi!**\n<a:hg:778538501955125248>**Seninle Beraber** **__${guild.memberCount}__** **Kişiyiz!**\n<a:hg:778538501955125248> **Kaydının yapılması için gerçek adını vermen gerekli.**\n<a:hg:778538501955125248> **<@&777660784355835916> Yetkilileri seninle ilgilenecektir.**\n<a:hg:778538501955125248> **Kayıt sorumluları gelene kadar beklemede kalın iyi eğlenceler.!**`
    )
  
    .addField(`<a:hg:778538501955125248> Hesap Oluşturma Tarihi:`, tarih)
  
    .addField(`<a:hg:778538501955125248> Hesap Güvenilir mi?:`, güvenli)
    .setImage("https://media.giphy.com/media/wneByGU0fXUtlH6RKT/giphy.gif")  
     channel.sendEmbed(embed);
});

// BOTUN TOKENİNİ ÇEKEN KOD
client.login(ayarlar.token);