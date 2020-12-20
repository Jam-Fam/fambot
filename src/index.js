import Discord from 'discord.js'

import config from './config.js'

import onMessage from './events/message.js'
import onGuildMemberUpdate from './events/guildMemberUpdate.js'

const bot = new Discord.Client()

import commands from './commands/index.js'
bot.commands = new Discord.Collection()

// TODO Can we just commands.map here? 
Object.keys(commands).map(key => {
  bot.commands.set(commands[key].name, commands[key]);
})

bot.login(config.TOKEN);

bot.on('ready', () => 
  console.info(`Logged in as ${bot.user.tag}!`))

bot.on('guildMemberUpdate', (oldMember, newMember) => 
  onGuildMemberUpdate(oldMember, newMember, bot))

bot.on('message', msg =>
  onMessage(msg, bot))
