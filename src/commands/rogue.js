import Discord from 'discord.js';

export default {
  name: 'rogue',
  description: "Gives info about the our team project.",

  execute(msg, args) {     
    let embed = new Discord.MessageEmbed()
      .setTitle("Project Rogue Info")
      .setDescription("Rogue is our team roguelike project.\nJoin <#694768305201873018> to learn more.")
      .addField('Goals', "[Trello](https://trello.com/invite/b/aKf2KCnF/48ba12904bd55de86c130af5890bb936/jamfam-community-game)", true)
      .addField('Repo',"[GitHub](https://github.com/ntwiles/jamfam-community-game)", true);
    msg.channel.send(embed);
  },
};

  