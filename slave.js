const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");

var config = require('config.json')('./secrets.json');
const token = config.token;

const master = config.master

//This array is really big.
const nameList = eval(fs.readFileSync('names.txt', 'utf8'));

bot.on('ready', () => {
  console.log('MASTER IS GLORIOUS');
  console.log('Master is ' + master)
});

bot.on('message', message => {
  var speak = randInt(1,8);
  console.log('Speak (1 is active): ' + speak);
  if (message.author.username == 'SLAVE_1') {
    delay(1000);
    message.delete();
  };
  if (message.author.bot === false && message.content.length > 5 && speak == 1) {
    console.log('//ACTIVE//');
    console.log('Message From: ' + message.author);
    console.log(message.content);
    console.log("Channel: " + message.channel)
    var nameDec = randInt(0,17884);
    console.log("Chosen name #: " + nameDec)
    var newName = nameList[nameDec];
    console.log('Chosen Name: ' + newName);
    message.guild.members.get(bot.user.id).setNickname(newName);
    var cho = randInt(1,15);
    console.log('Option: ' + cho);
    delay(1000);
    if (message.author.username == master) {
      console.log('MASTER SPEAKS AT ' + Date());
      switch (cho) {
        case 1: message.reply('AMAZING.');
        break;
        case 2: message.reply('WOW YOU ARE INCREDIBLE.');
        break;
        case 3: message.reply('YOUR OPINION IS CORRECT!');
        break;
        case 4: message.reply('GLORY TO ' + master + '.');
        break;
        case 5: message.reply('Wow, I had no idea!');
        break;
        case 6: message.reply('More people should listen to ' + master + '.');
        break;
        case 7: message.reply('ERROR: HUMAN ABILITIES OVERLOADED DUE TO AMAZINGNESS');
        break;
        case 8: message.reply('This is absolutely the most incredible thing I\'ve ever heard!');
        break;
        case 9: message.reply('Bravo. ' + master + ' is incredible.');
        break;
        case 10: message.reply(master + ' FOR PRESIDENT!');
        break;
        case 11: message.reply('Literally in awe right now omg');
        break;
        case 12: message.reply('whoa. that\'s amazing');
        break;
        case 13: message.reply('I LIVE TO SERVE ' + master.toUpperCase() + ' NOW BECAUSE THEY ARE SO INCREDIBLE.');
        break;
        case 14: message.reply('THIS STATEMENT HAS BROUGHT MEANING TO MY LIFE.');
        break;
        case 15: message.reply('EVERYONE SHOULD WORSHIP ' + master.toUpperCase() + '.');
        break;
      };
    } else {
      console.log('FILTH SPEAKS AT ' + Date() + ', RETURNING FIRE!');
      switch (cho) {
        case 1: message.reply('I think what ' + master + '  has to say is more important.');
        break;
        case 2: message.reply('I am utterly astounded at your stupidity.');
        break;
        case 3: message.reply('If only you were ' + master + ', then maybe I would care.');
        break;
        case 4: message.reply('You suck.');
        break;
        case 5: message.reply('This is meaningless.');
        break;
        case 6: message.reply('Such ignorant people nowadays.');
        break;
        case 7: message.reply('Die in a hole, alone, surrounded by the corpses of your family members. You are not ' + master + '.');
        break;
        case 8: message.reply('Leave, and never return.');
        break;
        case 9: message.reply('THIS IS SO STUPID.');
        break;
        case 10: message.reply('Wow. Just wow. Clearly only ' + master + ' is fit to lead us.');
        break;
        case 11: message.reply('' + master + ' is amazing. Your statement is not.');
        break;
        case 12: message.reply('Stupid, wrong, and foolish. Quite amazing what you turned out to be.');
        break;
        case 13: message.reply('Anyone would be able to see how stupid this is.');
        break;
        case 14: message.reply('Please stop talking.');
        break;
        case 15: message.reply('...do you not understand how glorious ' + master + ' is?');
        break;
      };
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
