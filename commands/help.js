const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setDescription(`**Książka pomocnicza dla użytkownika ${message.author.username}!**`)
  .addField("**Komendy z kategorii anime**", "**girl - pokazuje randomowe zdj z folderu bota :D**", "**boy - pokazuje randomowe zdj z folderu bota**")
  .addField("**Komendy z kategorii zdj profilowe**", "**avatar - pokazuje twój avatar**")
  message.channel.send(embed);
}

module.exports.help = {
  name:"help"
}
