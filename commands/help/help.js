const Discord = require('discord.js');

function help(msg, args) {
    let embed = new Discord.RichEmbed()
        .addField("Here are the commands I can run:",
        "itch, github")
        .addField("Get more help on any command like this:",
        "`help itch`");

    msg.channel.send(embed);
}

exports.help = help;