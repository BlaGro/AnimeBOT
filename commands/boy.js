const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let embed = new Discord.RichEmbed()
  number = 15;
  imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
  message.channel.send("**Oto randomowe zdj z folderu :D**", {files: ["./boys/" + imageNumber + ".jpg"]} )
}

module.exports.help = {
  name:"boy"
}
