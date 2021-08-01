const Discord = require('discord.js')
const disbut = require('discord-buttons')
const client = new Discord.Client()
disbut(client)

const ms = require('ms');

const math = require('discord-math');

const simplydjs = require('simply-djs')


let snipe = new Discord.Collection();

const PS = require('google-play-scraper');

const canvacord = require('canvacord');

const djs = require('djs-fun-v12')

const Database = require("@replit/database")

const { MessageButton, MessageActionRow } = require('discord-buttons')

const { MessageMenuOption, MessageMenu } = require("discord-buttons")

const db = new Database();

function wait(ms) {
	let start = new Date().getTime();
	let end = start;
	while (end < start + ms) {
		end = new Date().getTime();
	}
}
const moment = require('moment');

client.commands = new Discord.Collection();
const fs = require('fs');
fs.readdir('./events/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		const event = require(`./events/${file}`);
		let eventName = file.split('.')[0];
		console.log(`Loading event ${eventName} ✅`);
		client.on(eventName, event.bind(null, client));
	});
});
fs.readdir('./commands/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		let props = require(`./commands/${file}`);
		let commandName = file.split('.')[0];
		console.log(`Loaded command ${commandName} ✅`);
		client.commands.set(commandName, props);
	});
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Loaded Commands, Bot is online now 🟢');
});
app.listen(3000, () => {
	console.log('24/7');
});

client.on('ready', () => {
	client.user.setActivity('help', { type: 'PLAYING' });
});

client.on('messageDelete', message => {
	snipe.set(message.channel.id, {
		content: message.content,
		author: message.author
	});
});


client.login("bot token");
