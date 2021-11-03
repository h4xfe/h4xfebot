const Discord = require('discord.js');
const ms = require('ms');

exports.run = (client, msg, args) => {
  if (!msg.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`avatar` adlı komutu özel mesajlarda kullanamazsın.')
      return msg.author.sendEmbed(ozelmesajuyari);
    }
  let member = msg.mentions.members.first()
  var ChannelName = msg.channel.name
    if (ChannelName !== "müzik-bot") {
      msg.delete();
      msg.reply("Bu komut bu kanalda yasaktır.!").then(msg => {
        setTimeout(function(){
          msg.delete(1);
        }, 5000);
      });
    } else {
      if(!member)return msg.channel.send({embed: {
        color: Math.floor(Math.random() * (0xFFFFFF + 1)),
        description: ('Kimin Avatarına Bakmak İstiyorsun!')
       }});
          const Discord = require('discord.js')
               const kullanicibilgi = new Discord.RichEmbed()
               .setTitle(member.user.tag+" kullanıcısının profil fotoğrafı!")
               .setImage(member.user.avatarURL)
               .setFooter("H4XFE - Avatar Sistemi")
               return msg.channel.send(kullanicibilgi);
              }   
    }
	
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pp','avatar'],
  permLevel: 0,
 };
 
 exports.help = {
 name: 'pp',
 description: 'Avatarınızı veya etiketlediğiniz kişinin avatarını atar.',
 usage: '.pp [@Kişi]'
 }