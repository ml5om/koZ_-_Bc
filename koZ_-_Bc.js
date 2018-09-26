const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




client.on('message', msg =>{
    let message=msg;
    if(message.content.startsWith("-bc")){
        var args = message.content.split(' ').slice(1).join(' ');
    msg.guild.members.forEach(m=>{
        m.send(args.replace(/[user]/g,m)).catch();
    if(message.attachments.first()){
m.sendFile(message.attachments.first().url).catch();
    }
    })    ;
    }
});




  client.on('message', message => {
        var prefix = "-";
                  if (message.content.startsWith(prefix + "voice-bc")) {
      const broadcast = client.createVoiceBroadcast();
      broadcast.playFile('./music.mp3');
      for (const connection of client.voiceConnections.values()) {
        connection.playBroadcast(broadcast);
      }
                  }
                });
  




 client.on('message', message => {
  if (!message.guild) return;

  if (message.content === 'join room') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
        })
        .catch(console.log);
    } else {
      message.reply('يجب ان تكون في روم صوتي');
    }
  }
});
  



 client.on('message', message => {
  if (!message.guild) return;

  if (message.content === 'leave room') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.leave()
        .then(connection => { 
        })
        .catch(console.log);
    } else {
      message.reply('يجب ان تكون في روم صوتي');
    }
  }
});
  



client.on('message', function(message) {
	const myID = "488334414124810240";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://www.twitch.tv/almerjanytv');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "play")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});



client.login(process.env.BOT_TOKEN);
