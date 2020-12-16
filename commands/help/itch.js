const Discord = require('discord.js');

require('dotenv').config();

let prefix = process.env.PREFIX;

function itch(msg, args) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Fambot Itch Help")
    .addField("Get itch.io user details:", `\`${prefix}itch user ntwiles\``)
    .addField("Get itch.io game details:", `\`${prefix}itch game voidrun\` *or* \`${prefix}itch game voidrun ntwiles\``)

    msg.channel.send(embed);
}

exports.itch = itch;