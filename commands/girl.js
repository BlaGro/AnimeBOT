const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let embed = new Discord.RichEmbed()
  number = 20;
  imageNumber = Math.floor (Math.random() * (number -1 + 1)) + 1;
  message.channel.send("Oto randomowe zdj z folderu :D", {files: ["./girls/" + imageNumber + ".jpg"]} )
}

module.exports.help = {
  name:"girl"
}
