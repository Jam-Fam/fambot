import { create } from './create.js';
import { count } from './count.js'

import config from '../../config.js'

import * as Inviters from '../../services/inviters.js'

export default {
    name: 'invite',
    description: "Gives user ability to generate invite links.",

    async execute(msg, args) {   
        
        const inviter = await Inviters.get(msg.member.user.id)

        if (!inviter) {
            msg.channel.send(`You must be granted the @${config.INVITER_ROLE} role to invite users.`)
            return
        }

        let type = args[0];

        switch (type) {
            case "count": count(msg, args); break;
            case "create": create(msg, args); break;
            default: count(msg, args); break;
        }
    },
};
