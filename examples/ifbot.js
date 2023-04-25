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

client.on("messageCreate", (message) => {
  if (message.content === "ping") {
    message.reply({
      content: "pong",
    });
  }
});

/*two if 
client.on("messageCreate", (message) => {
  if (message.content.includes(`ping`)) {
    message.reply({
      content: "pong",
    });
  }
  if (message.content.includes(`餓`)) {
    message.reply({
      content: "我建議你吃東西",
    });
  }
});
*/
/*if else if 
client.on("messageCreate", (message) => {
  if (message.content.includes(`ping`)) {
    message.reply({
      content: "pong",
    });
  } else if (message.content.includes(`餓`)) {
    message.reply({
      content: "我建議你吃東西",
    });
  }
});
*/

client.once("ready", (c) => {
  console.log(`ready! logged in as ${c.user.tag}`);
});

client.login(token);
