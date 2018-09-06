const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    message.channel.role(`name`, "⛲ADMINISTRACJA⛲").send(`${message.author.username} potrzebuje pomocy`)
    message.channel.send("Wezwano administracje!(komenda jest testowa jak cos :) )")
}
