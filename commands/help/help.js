const Discord = require('discord.js');
const config = require('../../config.json');

let prefix = config.prefix;
let commands = ['itch','info'].map(c => `\`${prefix}${c}\``).join(', ')

function help(msg, args) {
    let embed = new Discord.RichEmbed()
        .addField("Here are the commands I can run:", commands)
        .addField("Get more help on any command like this:",
        `\`${prefix}help itch\``);

    msg.channel.send(embed);
}

exports.help = help;