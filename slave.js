const Discord = require('discord.js');
const bot = new Discord.Client();

var config = require('config.json')('./secrets.json');
const token = config.token;

const master = config.master
//This array is really big. Sorry.
var nameList = []

bot.on('ready', () => {
  console.log('MASTER IS GLORIOUS');
  console.log('Master is ' + master)
});

bot.on('message', message => {
  var speak = randInt(1,3);
  console.log('Speak (1 is active): ' + speak);
  if (message.author.bot === false && message.content.length > 5 && speak == 1) {
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
    if (message.author.username == master) {
      console.log('MASTER SPEAKS AT ' + Date());
      if (cho == 1) {
        message.reply('AMAZING.');
      };
      if (cho == 2) {
        message.reply('WOW YOU ARE INCREDIBLE.');
      };
      if (cho == 3) {
        message.reply('YOUR OPINION IS CORRECT!');
      };
      if (cho == 4) {
        message.reply('GLORY TO ' + master + '.');
      };
      if (cho == 5) {
        message.reply('Wow, I had no idea!');
      };
      if (cho == 6) {
        message.reply('More people should listen to ' + master + '.');
      };
      if (cho == 7) {
        message.reply('ERROR: HUMAN ABILITIES OVERLOADED DUE TO AMAZINGNESS');
      };
      if (cho == 8) {
        message.reply('This is absolutely the most incredible thing I\'ve ever heard!');
      }
      if (cho == 9) {
        message.reply('Bravo. ' + master + ' is incredible.');
      };
      if (cho == 10) {
        message.reply('' + master + ' FOR PRESIDENT!');
      };
      if (cho == 11) {
        message.reply('Literally in awe right now omg');
      };
      if (cho == 12) {
        message.reply('whoa. that\'s amazing');
      };
      if (cho == 13) {
        message.reply('I LIVE TO SERVE ' + master + ' NOW BECAUSE HE IS SO INCREDIBLE.');
      };
      if (cho == 14) {
        message.reply('THIS STATEMENT HAS BROUGHT MEANING TO MY LIFE.');
      };
      if (cho == 15) {
        message.reply('EVERYONE SHOULD WORSHIP ' + master + '.');
      };
    }
    else {
      console.log('FILTH SPEAKS AT ' + Date());
      if (cho == 1) {
        message.reply('I think what ' + master + '  has to say is more important.');
      };
      if (cho == 2) {
        message.reply('I am utterly astounded at your stupidity.');
      };
      if (cho == 3) {
        message.reply('If only you were ' + master + ', then maybe I would care.');
      };
      if (cho == 4) {
        message.reply('You suck.');
      };
      if (cho == 5) {
        message.reply('This is meaningless.');
      };
      if (cho == 6) {
        message.reply('Such ignorant people nowadays.');
      };
      if (cho == 7) {
        message.reply('Die in a hole, alone, surrounded by the corpses of your family members. You are not ' + master + '.');
      };
      if (cho == 8) {
        message.reply('Leave, and never return.');
      }
      if (cho == 9) {
        message.reply('THIS IS SO STUPID.');
      };
      if (cho == 10) {
        message.reply('Wow. Just wow. Clearly only ' + master + ' is fit to lead us.');
      };
      if (cho == 11) {
        message.reply('' + master + ' is amazing. Your statement is not.');
      };
      if (cho == 12) {
        message.reply('Stupid, wrong, and foolish. Quite amazing what you turned out to be.');
      };
      if (cho == 13) {
        message.reply('Anyone would be able to see how stupid this is.');
      };
      if (cho == 14) {
        message.reply('Please stop talking.');
      };
      if (cho == 15) {
        message.reply('...do you not understand how glorious ' + master + ' is?');
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
