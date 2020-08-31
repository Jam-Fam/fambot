const Discord = require('discord.js');
const config = require('../../config.json');

let prefix = config.prefix;

function rogue(msg, args) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Fambot Rogue Help")

    .addField("Get project info:", `\`${prefix}rogue\``)

    msg.channel.send(embed);
}

exports.rogue = rogue;