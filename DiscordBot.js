const Discord = require('discord.js');
const client = new Discord.Client();

const OPTION = require('./option.json');
const TOKEN = OPTION.TOKEN;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const master = ['358175019450236949'];

client.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content.match(/^ev ?/)) {
        if (master.indexOf(message.author.id.toString()) == -1) {
            message.reply("당신은 권한이 없어요.");
            return;
        }
        
        message.content = message.content.replace(/^ev ?/, '');
        try {
            message.channel.send(eval(message.content));
        } catch (e) {
            message.reply(e);
        }
    }
});

client.login(TOKEN);