import Discord from "discord.js";

let commands = ["itch", "info", "rogue"]
  .map((c) => `\`${process.env.PREFIX}${c}\``)
  .join(", ");

export function help(msg) {
  let embed = new Discord.MessageEmbed()
    .addField("Here are the commands I can run:", commands)
    .addField(
      "Get more help on any command like this:",
      `\`${process.env.PREFIX}help itch\``
    );

  msg.channel.send(embed);
}
