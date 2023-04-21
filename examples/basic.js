const dotenv = require("dotenv");
dotenv.config();

const { GatewayIntentBits, IntentsBitField, Client } = require("discord.js");

const token = process.env["TOKEN"];

console.log(token);

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once("ready", (c) => {
  console.log(`ready! logged in as ${c.user.tag}`);
});
client.login(token);
