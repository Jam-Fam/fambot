import { itch } from './itch.js';
import { rogue } from './rogue.js';
import { help } from './help.js';

export default {
    name: 'help',
    description: "Gets information on a given itch user.",

    execute(msg, args) {      
        let type = args[0];

        switch (type) {
            case "itch": itch(msg, args); break;
            case "rogue": rogue(msg, args); break;
            default: help(msg, args); break;
        }
    },
};
