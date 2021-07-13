import Discord from "discord.js";
import dotenv from "dotenv";

import onMessage from "./events/message.js";
import onGuildMemberUpdate from "./events/guildMemberUpdate.js";
import commands from "./commands/index.js";

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

dotenv.config();

// TODO Can we just commands.map here?
Object.keys(commands).map((key) => {
  bot.commands.set(commands[key].name, commands[key]);
});

bot.login(process.env.AUTH_TOKEN_DISCORD);

bot.on("ready", () => console.info(`Logged in as ${bot.user.tag}!`));

bot.on("guildMemberUpdate", (oldMember, newMember) =>
  onGuildMemberUpdate(oldMember, newMember, bot)
);

bot.on("message", (msg) => onMessage(msg, bot));
