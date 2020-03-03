const Discord = require('discord.js');
const bot = new Discord.Client();
const Music = require('./index.js');
const music = new Music(bot, {
	lavalink: {
		"restnode": {
			"host": "https://tabby-fluff-zircon.glitch.me",
			"port": 3000,
			"password":"youshallnotpass"
		},
		"nodes": [
			{ "host": "https://tabby-fluff-zircon.glitch.me", "port": 3000, "region": "asia", "password": "youshallnotpass" }
		]
	},
	admins: ["455346525716086795"]
});

bot.login("NjY1MjA3NjE2ODQ2MTY4MDc2.Xl3zzA.ZSXtjltFZm4FZCFH9fFZJ35QEKk")