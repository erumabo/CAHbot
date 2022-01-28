const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
	  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
	console.log("INTERACTION");
	  if (!interaction.isCommand()) return;

		console.log(interaction.commandName);
	  if (interaction.commandName === 'ping') {
		  await interaction.reply('Pong!');
	  }
});

const { TOKEN } = require('./secrets.json');
	client.login(TOKEN);
