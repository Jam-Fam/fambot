const Discord = require('discord.js');

function itch(msg, args) {
    let embed = new Discord.RichEmbed()
    .setTitle("Fambot Itch Help")
    .addField("Get itch.io user details:", "`itch user ntwiles`")
    .addField("Get itch.io game details:", "`itch game voidrun` *or* `itch game voidrun ntwiles`")

    msg.channel.send(embed);
}

exports.itch = itch;