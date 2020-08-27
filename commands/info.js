const Discord = require('discord.js');

const maintainers = [
  { 
    username: 'ntwiles',
    id: '222194207710773249'
  }, 
  { 
    username: 'Marlo',
    id: '292593191348076544'
  }
];

module.exports = {
    name: 'info',
    description: "Gives info about the bot.",

    execute(msg, args) {     
      let maintainerStr = maintainers.map(m => `<@${m.id}>`).join(', ');
      let embed = new Discord.MessageEmbed()
        .setTitle("FamBot Info")
        .addField('Maintained by', maintainerStr, true)
        .addField('GitHub',"[click here](https://github.com/ntwiles/jamfam-fambot)", true);
      msg.channel.send(embed);
    },
  };

  