import Discord from "discord.js";

export function rogue(msg) {
  let embed = new Discord.MessageEmbed()
    .setTitle("Fambot Rogue Help")

    .addField("Get project info:", `\`${process.env.PREFIX}rogue\``);

  msg.channel.send(embed);
}
