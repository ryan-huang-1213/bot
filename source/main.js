import dotenv from 'dotenv'
dotenv.config()

import { Client, Events, GatewayIntentBits } from 'discord.js'
//從discord.js引入函式Client, Events, GatewayIntentBits 
const token = process.env['TOKEN']
console.log(token)
//列印文字到主控台

/*這是if
let number = 2
if(number==1){
    console.log('the number is 1')
}else if(number == 2){
    console.log('the number is 2')
}else {
    console.log('the number is neither 1 nor 2')
}
*/

/*這是for
for(let i=1;i<5;i++){
    console.log(`this is for loop ${i}`)
}
*/

const client = new Client({ intents: [GatewayIntentBits.Guilds] })
//創建一個新的用戶實體

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`)
})

client.login(token)

////////second project 

/*
import dotenv from 'dotenv'
dotenv.config()
//這是標註 
let token = process.env['TOKEN']
console.log(process.env['TOKEN'])


import DiscrodJS, { GatewayIntentBits, IntentsBitField } from 'discord.js'

const client = new DiscordJS.Client({
    intents:[
     GatewayIntentBits.Guilds,
     GatewayIntentBits.GuildMessages,
     GatewayIntentBits.MessageContent,
    ]
})

client.on('ready',() =>{
    console.log('BOT準備好了!')
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
})

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
client.on('messageCreate',(message) => {
    if (message.content === 'test'){
        message.reply({
            content:`${c.user.tag}在歐:)`,
        })
    }
})
*/

//client.login('MTA2NTg3MTIzNDQ3MjA4MzQ5Nw.GxPLB0.GsJST4uvPuFlpoTMy0UsYq9YNfc9-rshlIvYIk')

/*
console.log(process.env.TOKEN)
client.login(process.env.TOKEN)
*/