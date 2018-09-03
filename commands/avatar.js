const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let avatar = message.author.avatarURL;
  let embed = new Discord.RichEmbed()
  .setDescription(`Avatar użytkownika ${message.author.username}`)
  .addField("Łapaj avatarek", "Fajny co nie?")
  .setThumbnail(avatar)
  message.channel.send(embed);
}

module.exports.help = {
  name:"avatar"
}
