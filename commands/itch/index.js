const { user } = require('./user');
const { game } = require('./game');

module.exports = {
    name: 'itch',
    description: "Gets information on a given itch user.",

    execute(msg, args) {      
      let type = args[0];

      switch (type) {
        case "user": user(msg,args); break;
        case "game": game(msg,args); break;
        default: msg.channel.send("Unknown itch command. Type 'itch help' for more help.")
      }
    },
  };

  