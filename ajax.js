const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");

var config = require('config.json')('./secrets.json');
const token = config.token;

//This array is not really big.
const nameList = eval(fs.readFileSync('names.txt', 'utf8'));

var idList = [];
var xpList = [];
var timeList = [];
var d = new Date();

var tempid = eval(fs.readFileSync('id.txt', 'utf8'));
for(var i=0; i < tempid.length; i++){
  idList.push(parseInt(tempid[i]));
}
var tempxp = eval(fs.readFileSync('xp.txt', 'utf8'));
for(var i=0; i < tempxp.length; i++){
  xpList.push(parseInt(tempxp[i]));
}

bot.on('ready', () => {
  console.log('Ajax is ready.');
  console.log('idList = '+idList.toString());
  console.log('xpList = '+xpList.toString());
});

bot.on('message', message => {
  if (message.author.bot === false) {
    if(getsXP(message.author.id)){
      var index = userExists(message.author.id);
      if(index === -1){
        addUserXP(message.author.id, randInt(15,25));
        console.log("New user: User of id "+message.author.id+" now has "+xpList[xpList.length-1]+" XP!");
        console.log("idList.length = "+idList.length);
        timeList[message.author.id] = d.getTime();
      } else {
        xpList[index] += randInt(15,25);
        writeFiles();
        console.log("User of id "+message.author.id+" now has "+xpList[index]+" XP!");
        timeList[message.author.id] = d.getTime();
      }
    }
  };
});

function getsXP(userid){
  return (timeList[userid] == undefined) || (d.getTime() >= 60000 + timeList[userid]);
}

function addUserXP(addid, addxp){
  idList.push(addid);
  xpList.push(addxp);
  writeFiles();
}

function writeFiles(){
  fs.writeFile("id.txt", grabFileContents(true)+']', function(err) {
    if(err) {
        return console.log(err);
    }
  });
  fs.writeFile("xp.txt", grabFileContents(false)+']', function(err) {
    if(err) {
        return console.log(err);
    }
  });
}

function grabFileContents(getids){
  if(getids){
    return '['+idList.toString()+',';
  } else {
    return '['+xpList.toString()+',';
  }
}

function userExists(id){
  for(var i=0; i < idList.length; i++){
    if(idList[i] == id){
      return i;
    }
  }
  return -1;
}

function sendMessage(str, channel) {
  changeName(channel.guild.members.get(bot.user.id));
  channel.send(str);
}

function changeName(you){
  var nameDec = randInt(0,54);
  var newName = nameList[nameDec];
  console.log('Chosen Name: ' + newName);
  you.setNickname(newName);
  var cho = randInt(1,15);
  delay(1000);
}

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
