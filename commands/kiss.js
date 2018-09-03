const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let osoba = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let embed = new Discord.RichEmbed()
  number = 7;
  imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
  message.channel.send(`${message.author.username} pocałował ${osoba}`, {files: ["./kiss/" + imageNumber + ".gif"]} )
}

module.exports.help = {
  name:"kiss"
}
