import Discord from 'discord.js';

import config from '../../config.js' 

let commands = ['itch', 'info', 'rogue'].map(c => `\`${config.PREFIX}${c}\``).join(', ')

export function help(msg, args) {
    let embed = new Discord.MessageEmbed()
        .addField("Here are the commands I can run:", commands)
        .addField("Get more help on any command like this:",
        `\`${config.PREFIX}help itch\``);

    msg.channel.send(embed);
}