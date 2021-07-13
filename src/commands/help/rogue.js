import Discord  from 'discord.js';

import config from '../../config.js'

export function rogue(msg) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Fambot Rogue Help")

    .addField("Get project info:", `\`${config.PREFIX}rogue\``)

    msg.channel.send(embed);
}