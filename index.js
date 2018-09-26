const Discord = require('discord.js')

var bot = new Discord.Client()

const TOKEN = process.env.BOT_TOKEN

bot.on("message", function(message) {

    bot.user.setPresence({ game: { name: `b!help I Estou em ${bot.guilds.size} servidores com ${bot.users.size} Usuários!`, type: 1, url: "https://www.twitch.tv/backoutoficial"}});
          
});


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = 'b!'
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let dcmd = '**Olá ' + message.author + '! Esse comando ainda está sendo desenvolvido, por favor, tente novamente mais tarde.**'

    if (command == `${prefix}help`) {
        if(message.author.id !== '414567849659727885') return message.channel.send(dcmd)
        message.channel.send('**Falta codes...**')

          try{
await message.author.send(h1)
}catch(e){
console.log(e.stack);
message.channel.send(`${message.author}**, Habilite a DM para eu poder enviar os comandos.**`)
}

}
    
});
bot.login(TOKEN);
