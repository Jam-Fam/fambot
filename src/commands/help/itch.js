import Discord from "discord.js";

export function itch(msg) {
  let embed = new Discord.MessageEmbed()
    .setTitle("Fambot Itch Help")
    .addField(
      "Get itch.io user details:",
      `\`${process.env.PREFIX}itch user ntwiles\``
    )
    .addField(
      "Get itch.io game details:",
      `\`${process.env.PREFIX}itch game voidrun\` *or* \`${process.env.PREFIX}itch game voidrun ntwiles\``
    );

  msg.channel.send(embed);
}
