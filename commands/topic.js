const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {
	message.channel.send(`Temat tego kanału to ${message.textChannel.topic}`)
}

module.exports.help {
	name:"topic"
}