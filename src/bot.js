const { Client, Events, GatewayIntentBits } = require("discord.js");
const controllers = require("./controllers");

const { DISCORD_TOKEN } = process.env;

const client = new Client({
  autoReconnect: true,
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on(Events.ClientReady, async () => {
  console.log(
    `Discord is connected. Client user: ${client.user.username}#${client.user.discriminator}`
  );
  await controllers.init(client);
});

client.run = async () => {
  await client.login(DISCORD_TOKEN);
};

process.on("uncaughtException", (error) => {
  console.error(`Erro não capturado: ${error.message}`);
});

module.exports = client;
