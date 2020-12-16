import Discord from 'discord.js';

import config from '../../config.js'

export function itch(msg, args) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Fambot Itch Help")
    .addField("Get itch.io user details:", `\`${config.PREFIX}itch user ntwiles\``)
    .addField("Get itch.io game details:", `\`${config.PREFIX}itch game voidrun\` *or* \`${config.PREFIX}itch game voidrun ntwiles\``)

    msg.channel.send(embed);
}