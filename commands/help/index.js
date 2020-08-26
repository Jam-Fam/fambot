const { itch } = require('./itch');
const { help } = require('./help');

module.exports = {
    name: 'help',
    description: "Gets information on a given itch user.",

    execute(msg, args) {      
        let type = args[0];

        switch (type) {
            case "itch": itch(msg,args); break;
            default: help(msg,args); break;
        }
    },
};
