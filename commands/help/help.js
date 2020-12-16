const Discord = require('discord.js');

require('dotenv').config();
let prefix = process.env.PREFIX;

let commands = ['itch', 'info', 'rogue'].map(c => `\`${prefix}${c}\``).join(', ')

function help(msg, args) {
    let embed = new Discord.MessageEmbed()
        .addField("Here are the commands I can run:", commands)
        .addField("Get more help on any command like this:",
        `\`${prefix}help itch\``);

    msg.channel.send(embed);
}

exports.help = help;