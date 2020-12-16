import Discord from 'discord.js'

import config from './config.js'
import commands from './commands.js'

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

// TODO Can we just commands.map here? 
Object.keys(commands).map(key => {
  bot.commands.set(commands[key].name, commands[key]);
});

bot.login(config.TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (!msg.content.startsWith(config.PREFIX)) return;

  msg.content = msg.content.substring(config.PREFIX.length);

  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();

  console.info(`Called command: ${command}`);

  if (!bot.commands.has(command)) return;

  try { bot.commands.get(command).execute(msg, args); } 
  catch (error) {
    console.error(error);
    msg.reply('There was an error trying to execute that command!');
  }
});
