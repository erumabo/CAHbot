const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

function lpad(t,l,f=' '){t=`${t}`;const r=l-t.length;return f.repeat(r>0?r:0)+t;}
function rand(min, max) {return Math.floor(Math.random()*(max-min)+min)}
function getRandomCard() {
  const lang = ['en','es'][rand(0,2)];
  const color = ['black','white'][rand(0,2)];
  let index = 0;
  if(color == 'black') index = rand(0,20);
  else index = rand(0,400);
  return `./cards/${lang}/${color}/${lpad(index,3,'0')}.jpg`;
}

client.on('ready', () => {
	  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  switch(interaction.commandName) {
    case 'ping':
      interaction.reply('Pong!');
      break;
    case 'cah-card':
      const file = getRandomCard(); 
      interaction.reply({files: [file]});
      break;
    default:
      interaction.reply('WIP');
  }

});

const { TOKEN } = require('./secrets.json');
	client.login(TOKEN);
