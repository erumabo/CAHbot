const { TOKEN, CLIENT_ID, GUILD_ID } = require('./secrets.json');

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [
	{
		name: "ping",
		description: "Pong"
	},
	{
		name: "games",
		description: "Available games to play"
	},
	{
		name: "cah-card",
		description: "Throws a new Cards Against Humanity Black Card"
	}
];

const rest = new REST({version:'9'}).setToken(TOKEN);

(async() => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
			{ body: commands },
		);
		console.log('Successfully reloaded application (/) commands.');

	} catch (error) {
		console.error(error);
	}
})();
