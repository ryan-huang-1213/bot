const dotenv = require("dotenv");
dotenv.config();

const { GatewayIntentBits, IntentsBitField, Client } = require("discord.js");

const token = process.env["TOKEN"];

console.log(token);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages, //需要增加這兩項機器人才能讀訊息跟傳訊息歐
    GatewayIntentBits.MessageContent, //
  ],
});

const replies = {
  ping: "pong",
  餓: "我建議你吃東西",
  累: "撐住，別睡著",
};

client.on("messageCreate", (message) => {
  for (const [ket, value] of Object.entries(replies)) {
    if (message.content.includes(key)) {
      message.reply({
        intents: "value",
      });
    }
  }
});

client.once("ready", (c) => {
  console.log(`ready! logged in as ${c.user.tag}`);
});

client.login(token);
