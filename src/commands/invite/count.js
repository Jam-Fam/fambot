import Discord from 'discord.js';

import * as Inviters from '../../services/inviters.js'
import config from '../../config.js'

export const calculateInvites = (inviter) => {
    const millisecondsOld = new Date() - new Date(inviter.grantedAt)
    const yearsOld = millisecondsOld / 1000 / 60 / 60 / 24 / 365
    const totalEarned = 1 + Math.floor(config.INVITES_PER_YEAR * yearsOld)
    return totalEarned - inviter.invitesCreated
}

export async function count(msg, args) {
    const inviter = await Inviters.get(msg.member.user.id)
    const invites = calculateInvites(inviter)
    msg.channel.send(`You have ${invites} invite(s) earned.`)
}