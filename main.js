/*
const dotenv = require('dotenv')
dotenv.config()
const { GatewayIntentBits, IntentsBitField } = require('discord.js')
const token = process.env['TOKEN']
console.log(token)
const client = new Client({ intents: [GatewayIntentBits.Guilds] })
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`)
})
client.login(token)
*/

/*這是if
let number = 1
if(number==1){
    console.log('the number is 1')
}*/

/*這是if else 
let number = 2
if(number==1){
    console.log('the number is 1')
}else{
    console.log('the number isn\'t 1')
}
*/

/*這是if else if 
let number = 2
if(number==1){
    console.log('the number is 1')
}else if(number == 2){
    console.log('the number is 2')
}
*/

/*這是for
for(let i=1;i<5;i++){
    console.log(`this is for loop ${i}`)
}*/

////////////second project 

//this is for common.js module 

const dotenv = require('dotenv')
dotenv.config()
let token = process.env.token
console.log(token)
const { GatewayIntentBits, IntentsBitField, Client } = require('discord.js')
const DiscordJS = require('discord.js')

/*this is for es6 module 
import dotenv from 'dotenv'
dotenv.config()
let token = process.env['TOKEN']
console.log(process.env['TOKEN'])
import { GatewayIntentBits, IntentsBitField } from 'discord.js'
import DiscordJS from 'discord.js'
*/

const client = new Client({
    intents:[
        GatewayIntentBits.Guilds, //伺服器事件
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})


client.on('ready',c =>{
    console.log(`${c.user.tag}準備好了!`)
    /* guild
    const guildId ='346218020798070786'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if(guild){
        commands = guild.commands
    }else{
        commands = client.application.commands
    }
    commands.create({
        name:'ping',
        description:'測試機跟你玩乒乓',
    })
    */
})

/*這是for*/
const replies = {
    'ping': 'pong',
    '餓': '我建議你吃東西',
    '累': '撐住，別睡著',
}

client.on('messageCreate', (message)=> {
    for (const [key, value] of Object.entries(replies)) {
        if (message.content.includes(key)) {
          message.reply(value)
        }
    }
})


/*
client.on('messageCreate', (message)=> {
    
})
*/
/*if else 
    if (message.content.includes(`ping`)){
        message.reply({
            content:`pong`,
        })
    }else if(message.content.includes(`餓`)){
        message.reply({
            content:`我建議你吃食物`,
        })
    }
    */

    /*if if
    if (message.content === 'ping'){
        count++
        message.reply({
            content:`pong${count}`,
        })
    }
    if(message.content.includes(`餓`)){
        message.reply({
            content:`我建議你吃東西`,
        })
    }*/

client.login(token)

/* slash command0
client.on('interactionCreate',async(interaction) =>{
    if(!interaction.isCommand()){
        return
    }
    const {commandName,options} = interaction
    if(commandName ==='乒'){
        interaction.reply({
            content:'乓!',
            ephemeral:true,
        })
    }
})
*/
