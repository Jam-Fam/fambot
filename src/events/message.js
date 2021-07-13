import config from "./../config.js";

const onMessage = (msg, bot) => {
  if (!msg.content.startsWith(config.PREFIX)) return;

  msg.content = msg.content.substring(config.PREFIX.length);

  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();

  console.info(`Called command: ${command}`);

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply("There was an error trying to execute that command!");
  }
};

export default onMessage;
