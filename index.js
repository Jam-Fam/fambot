require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
const botCommands = require('./commands');

const config = require('./config.json');
let prefix = config.prefix;

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (!msg.content.startsWith(prefix)) return;
  msg.content = msg.content.substring(prefix.length);

  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
  console.info(`Called command: ${command}`);

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args);
  } 
  catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});
