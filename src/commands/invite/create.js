import { calculateInvites } from './count.js'
import * as Inviters from '../../services/inviters.js'

export async function create(msg) {
    const channel = msg.guild.channels.cache
        .filter((channel) => channel.type === 'text')
        .first()

    const inviter = await Inviters.get(msg.member.user.id)

    const invitesAvailable = calculateInvites(inviter)

    if (invitesAvailable > 0) {
        // TODO: First check if we have permission to generate invites.
        const invite = await channel.createInvite({
            maxAge: 0,
            maxUses: 1
        })

        inviter.invitesCreated++
        await Inviters.set(inviter)
        msg.author.send(invite.url)
        msg.channel.send('I sent you an invite link!')

    } else {
        msg.channel.send('You don\'t have enough invites to do that yet!')
    }
}