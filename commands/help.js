const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "help",
  aliases: ["commands"],
  usage: "help",
  description: "help command",
  run: async (client, message, args) => {
    
const embed = new Discord.MessageEmbed()
.setTitle(`My Commands`)
.setDescription(`help`)
.setColor(`RANDOM`)
.setFooter(`Footer`)
message.channel.send(embed)
    

  }
}   
