const Discord = require('discord.js');
const config = require('../../config.json');

let prefix = config.prefix;

function itch(msg, args) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Fambot Itch Help")
    .addField("Get itch.io user details:", `\`${prefix}itch user ntwiles\``)
    .addField("Get itch.io game details:", `\`${prefix}itch game voidrun\` *or* \`${prefix}itch game voidrun ntwiles\``)

    msg.channel.send(embed);
}

exports.itch = itch;