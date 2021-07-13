import config from './../config.js'

import * as Inviters from '../services/inviters.js'

const onGuildMemberUpdate = async (oldMember, newMember) => {
    const inviterBefore = oldMember.roles.cache.find(r => r.name === config.INVITER_ROLE)
    const inviterAfter = newMember.roles.cache.find(r => r.name === config.INVITER_ROLE)
    
    if (inviterAfter && !inviterBefore) {
        const userId = newMember.user.id
        await Inviters.create(userId)
    }
}

export default onGuildMemberUpdate