const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
    if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .setTimestamp()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(':warning: Uyarı :warning:', '`topluçek` adlı komutu özel mesajlarda kullanamazsın.')
          return message.author.sendEmbed(ozelmesajuyari);
        }
    const id = args[0]
    if (!id)
        return message.reply("Ses kanal idsi ekleyiniz.")
    message.guild.members.filter(a => a.voiceChannel).forEach(x => x.setVoiceChannel(id))
    message.channel.send(`Bütün Sesli Kanaldaki Üyeler <#${id}> İsimli Odaya Taşındı!`)
    
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['topluçek', 'toplucek'],
    permLevel: 2
};
exports.help = {
    name: "topluçek",
    usage: ".topluçek <kanalid>"
}