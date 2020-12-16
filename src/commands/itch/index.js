import user from './user.js';
import game from './game.js';

export default {
    name: 'itch',
    description: "Gets information on a given itch user.",

    execute(msg, args) {
      console.log('execute itch')
      let type = args[0];

      switch (type) {
        case "user": user(msg,args); break;
        case "game": game(msg,args); break;
        default: msg.channel.send("Unknown itch command.")
      }
    },
  };

  