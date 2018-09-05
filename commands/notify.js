const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
	let powod = args.join(" ")
	let embed = new Discord.RichEmbed()
	.setDescription("Powiadomienia :D")
	.addField(`Powiadomujący to **${message.author.username}**`)
	.addField("Treść", powód)
	message.channel.send(embed);

	message.guild.channel.find(`name`, "⚠ogłoszenia⚠")
}

module.exports.help = {
	name:"notify"
}