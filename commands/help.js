const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'help',
  run: async(client, message, args) =>{ 
    const discord = new MessageEmbed()
      .setThumbnail('https://media.discordapp.net/attachments/830003681638350860/871414957525336155/Untitled465_20210727201502.png')
      .setColor('RANDOM')
      .setTitle(`My commands`)
      .setDescription(`help`);
      message.channel.send.(embed);
  }
  }
