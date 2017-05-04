const Discord = require('discord.js');
const bot = new Discord.Client();

var config = require('config.json')('./secrets.json');
const token = config.token;


bot.on('ready', () => {
  console.log('MASTER IS GLORIOUS');
});

bot.on('message', message => {
  var speak = randInt(1,3);
  console.log('Speak (1 is active): ' + speak);
  if (message.author.username !== 'Arco' && message.author.username !== 'SLAVE_1' && message.content.length > 5 && speak == 1) {
    console.log('//ACTIVE//');
    console.log('Message From: ' + message.author);
    console.log(message.content);
    console.log("Channel: " + message.channel)
    //var count = 5
    //while (count !== 0) {
    var nameDec = randInt(0,17884);
    console.log("Chosen name #: " + nameDec)
    var newName = nameList[nameDec];
    console.log('Chosen Name: ' + newName);
    message.guild.members.get(bot.user.id).setNickname(newName);
    var cho = randInt(1,15);
    console.log('Option: ' + cho);
    delay(1000);
    if (message.author.username == 'The_Complex') {
      console.log('MASTER SPEAKS AT ' + Date());
      if (cho == 1) {
        message.channel.sendMessage('AMAZING.');
      };
      if (cho == 2) {
        message.channel.sendMessage('WOW YOU ARE INCREDIBLE.');
      };
      if (cho == 3) {
        message.channel.sendMessage('YOUR OPINION IS CORRECT!');
      };
      if (cho == 4) {
        message.channel.sendMessage('GLORY TO <@!245387425164034049>.');
      };
      if (cho == 5) {
        message.channel.sendMessage('Wow, I had no idea!');
      };
      if (cho == 6) {
        message.channel.sendMessage('More people should listen to <@!245387425164034049>.');
      };
      if (cho == 7) {
        message.channel.sendMessage('ERROR: HUMAN ABILITIES OVERLOADED DUE TO AMAZINGNESS');
      };
      if (cho == 8) {
        message.channel.sendMessage('This is absolutely the most incredible thing I\'ve ever heard!');
      }
      if (cho == 9) {
        message.channel.sendMessage('Bravo. <@!245387425164034049> is incredible.');
      };
      if (cho == 10) {
        message.channel.sendMessage('<@!245387425164034049> FOR PRESIDENT!');
      };
      if (cho == 11) {
        message.channel.sendMessage('Literally in awe right now omg');
      };
      if (cho == 12) {
        message.channel.sendMessage('whoa. that\'s amazing');
      };
      if (cho == 13) {
        message.channel.sendMessage('I LIVE TO SERVE <@!245387425164034049> NOW BECAUSE HE IS SO INCREDIBLE.');
      };
      if (cho == 14) {
        message.channel.sendMessage('THIS STATEMENT HAS BROUGHT MEANING TO MY LIFE.');
      };
      if (cho == 15) {
        message.channel.sendMessage('EVERYONE SHOULD WORSHIP <@!245387425164034049>.');
      };
    }
    else {
      console.log('FILTH SPEAKS AT ' + Date());
      if (cho == 1) {
        message.channel.sendMessage('I think what <@!245387425164034049>  has to say is more important.');
      };
      if (cho == 2) {
        message.channel.sendMessage('I am utterly astounded at your stupidity.');
      };
      if (cho == 3) {
        message.channel.sendMessage('If only you were <@!245387425164034049>, then maybe I would care.');
      };
      if (cho == 4) {
        message.channel.sendMessage('You suck.');
      };
      if (cho == 5) {
        message.channel.sendMessage('This is meaningless.');
      };
      if (cho == 6) {
        message.channel.sendMessage('Such ignorant people nowadays.');
      };
      if (cho == 7) {
        message.channel.sendMessage('Die in a hole, alone, surrounded by the corpses of your family members. You are not <@!245387425164034049>.');
      };
      if (cho == 8) {
        message.channel.sendMessage('Leave, and never return.');
      }
      if (cho == 9) {
        message.channel.sendMessage('THIS IS SO STUPID.');
      };
      if (cho == 10) {
        message.channel.sendMessage('Wow. Just wow. Clearly only <@!245387425164034049> is fit to lead us.');
      };
      if (cho == 11) {
        message.channel.sendMessage('<@!245387425164034049> is amazing. Your statement is not.');
      };
      if (cho == 12) {
        message.channel.sendMessage('Stupid, wrong, and foolish. Quite amazing what you turned out to be.');
      };
      if (cho == 13) {
        message.channel.sendMessage('Anyone would be able to see how stupid this is.');
      };
      if (cho == 14) {
        message.channel.sendMessage('Please stop talking.');
      };
      if (cho == 15) {
        message.channel.sendMessage('...do you not understand how glorious <@!245387425164034049> is?');
      };
      //};
      //var count = count - 1
    };
  };
});

function delay(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

bot.login(token);
