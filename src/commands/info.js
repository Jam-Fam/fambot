import Discord from "discord.js";

const maintainers = [
  {
    username: "ntwiles",
    id: "222194207710773249",
  },
  {
    username: "Marlo",
    id: "292593191348076544",
  },
];

export default {
  name: "info",
  description: "Gives info about the bot.",

  execute(msg) {
    let maintainerStr = maintainers.map((m) => `<@${m.id}>`).join(", ");
    let embed = new Discord.MessageEmbed()
      .setTitle("FamBot Info")
      .addField("Maintained by", maintainerStr, true)
      .addField(
        "GitHub",
        "[click here](https://github.com/Jam-Fam/jamfam-fambot)",
        true
      );
    msg.channel.send(embed);
  },
};
