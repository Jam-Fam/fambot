const Discord = require('discord.js');

module.exports = {
    name: 'info',
    description: "Gives info about the bot.",

    execute(msg, args) {     

      let embed = new Discord.RichEmbed()
        .setTitle("FamBot Info")
        .addField('Maintained by', "@ntwiles", true)
        .addField('GitHub',"[click here](https://github.com/ntwiles/jamfam-fambot)", true);
      msg.channel.send(embed);
    },
  };

  