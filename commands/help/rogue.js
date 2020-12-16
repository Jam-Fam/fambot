const Discord = require('discord.js');

require('dotenv').config();
let prefix = process.env.PREFIX;

function rogue(msg, args) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Fambot Rogue Help")

    .addField("Get project info:", `\`${prefix}rogue\``)

    msg.channel.send(embed);
}

exports.rogue = rogue;