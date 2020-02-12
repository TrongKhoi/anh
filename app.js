const Discord = require("discord.js");
const client = new Discord.Client();
//Thính Thính
var fs = require('fs')
var array = fs.readFileSync('thinh.txt','utf8').split("\n")
//
const config = require("./config.json");
	const time = Date();
	pak = require('./package.json');
	profanities = require("./profanities.json");
	result = Math.round(Math.random());
	cleverbot = require('cleverbot.io');
	ms = require('ms');
const token = process.env.TOKEN;
const oid = process.env.OID;

client.on("ready", () => {
  client.user.setActivity('Kao đang ị', { type: 'PLAYING' }); 
})

//thính thính =)))
client.on("message", (message) => {
    let content = ["xin thính", "thính", "thả tym", "xin thinh","rải thính","thinh","thả thính"]
    if (content.includes(message.content.toLowerCase())) {
        //if(message.author.id == '457095791727607809') 
           //return message.reply(`Học không lo học suốt ngày thính cc `).then(m => m.delete(5000))
        const random = array[Math.floor(Math.random() * array.length)]
        message.channel.send(random)
    }    
})
//
client.on("message", (message) => {
    let content = ["valentine", "valentai", "va lung tung", "valungtung","va len thai","va vào nhau","tán gái"]
    if (content.includes(message.content.toLowerCase())) {
        const random = array[Math.floor(Math.random() * array.length)]
        message.channel.send(random)
    }    
})
client.on("message", (message) => {
    let content = ["tenk", "ten k", "khôi", "ten"]
    if (content.includes(message.content.toLowerCase())) {
        if(message.author.id == '506346663582105600') 
         return message.reply(`Ơi!! Đã có anh ở đây rồi`).then(m => m.delete(30000))
    }    
})
client.on("message", (message) => {
    let content = ["tenk", "ten k", "khôi", "ten"]
    if (content.includes(message.content.toLowerCase())) {
        if(message.author.id == '661979242531127316') 
         return message.reply(`Ơi!! Đã có anh ở đây rồi`).then(m => m.delete(30000))
    }    
})
client.on("message", (message) => {
    let content = ["tenk", "ten k", "khôi", "ten"]
    if (content.includes(message.content.toLowerCase())) {
        if(message.author.id == '464774353611915284') 
         return message.reply(`Ơi!! Đã có anh ở đây rồi`).then(m => m.delete(30000))
    }    
})


client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  //client.user.setActivity(`Serving ${client.guilds.size} servers`);
});
  client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  //client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
 
	
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    if(message.author.id == oid){
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
   else{ message.reply('Xin lỗi bạn chưa đủ tuổi để làm việc này!');}  
  }
 
  if(command === "delete") {
	  if(message.author.id == oid){
   	  const deleteCount = parseInt(args[0], 10);
   	  if(!deleteCount || deleteCount < 2 || deleteCount > 100)
   	  return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    	  const fetched = await message.channel.fetchMessages({limit: deleteCount});
    	  message.channel.bulkDelete(fetched)
         .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }}
});


client.on('message', msg => {
	
	if(msg.content === 'boobs') {
	const search = require('random-puppy')
	module.exports.run = (bot, msg, args, discord) => {
 	let em = new discord.RichEmbed()
  	.setTitle("Sói K Boobs")
 	.setDescription("Here's a boob pic...")
  	.setFooter(`Requested by ${message.author.username}`)
  	.setTimestamp()
  	let key = [
 	   "boobs",
 	   "tits",
  	   "breasts",
  	   "nipple",
   	   "bust"
  		  ]  
  if (!msg.channel.nsfw) return msg.channel.send(":underage: You need to be in an NSFW channel to use this command.");
  let res = key[Math.floor(Math.random()*key.length)]  
    search(res).then(url => {
    em.setImage(url)
    msg.channel.send({embed: em})
    })
  }	 
}
	
	
	
	
	if (msg.content === "ảnh Thi") {
	  number = 2;
	  var imageNumber = Math.floor(Math.random()*(number - 1 + 1)) + 1;
	  msg.channel.send({files: ["./anh/Thi/" + imageNumber + ".jpg"]});
  }
  if (msg.content === 'Hi') { msg.reply('Hi');}
  if (msg.content === 'tenk') { msg.reply('anh đây');}
  if (msg.content === "đm") { msg.reply('bậy nè');}
  if (msg.content === "ai hay thủ dâm") { msg.reply('Là bạn đó');}
  if (msg.content === "ai hay ăn cứt") { msg.reply('Ngoài bạn ra còn ai đâu');}
  if (msg.content === "Tenk") { msg.reply('Anh ấy đang bận.');}
  if (msg.content === "dm") { msg.reply('tự vả vào mồm đi');}
  if (msg.content === "tenk") { msg.reply('ơi anh đây');}
});


client.on('message', message => {
  // If the message is "avatar"
  if (message.content === 'avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});


const embed = new Discord.RichEmbed()
  .setTitle("**Đây là info về người bạn xin**")
  .setAuthor("Meo K", "https://cdn.discordapp.com/avatars/468789858450800640/b7b595325b3712a82971397dba9e76f2.png?size=2048")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("________________________________________________________________________________________________")
  .setFooter("Meo K", "https://cdn.discordapp.com/attachments/416629410062532623/487245094156632064/Gasmic.png")
  .setImage("https://cdn.discordapp.com/attachments/416629410062532623/487244925159866388/haha.gif")
  .setThumbnail("https://cdn.discordapp.com/avatars/379669925301714946/17c6a4e3446157794e13ebf89abe9fe1.png?size=2048")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Name: Cú lừa", "🙄🙄🙄🙄🙄")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Date of birth", "xx/xx/xxxx.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Address", "Sao Hỏa", true);


client.on("message", (message) => {
  if (message.content.startsWith("Hiện hình")) {client.user.setStatus(`online`);}
  if (message.content.startsWith("Ẩn thân")) {client.user.setStatus(`invisible`);}
  if (message.content.startsWith("Afk")) {client.user.setStatus(`idle`);}
  if (message.content.startsWith("Bận")) {client.user.setStatus(`dnd`);}
	
  if (message.content.startsWith("meo meo")) {message.channel.send("Gâu gâu");}
  if (message.content.startsWith("chào mn")) {message.channel.send("Mn chào em");}
  if (message.content.startsWith("act cool")) {message.channel.send("Đứng hình mất 5s");}
  if (message.content.startsWith("em thích ai")) {message.channel.send("em thích trai kỹ thuật, họ mạnh mẽ và đầy nam tính");}
  if (message.content.startsWith("info")) {message.channel.send({embed});}
  if (message.content.startsWith("rank Ten K")) {message.channel.send(" ", {files: ["./anh/rank.png"]});}
  //if (message.content.startsWith("!rank")) {message.channel.send("Tiếp tục cào phím đi", {files: ["./anh/rank.png"]});}
  //if (message.content.startsWith("rank ten K")) {message.channel.send("wow", {files: ["./anh/rank.png"]});}
  //if (message.content.startsWith("rank ten k")) {message.channel.send("wao", {files: ["./anh/rank.png"]});}
  //if (message.content.startsWith("rank Ten k")) {message.channel.send("woa", {files: ["./anh/rank.png"]});}
  if (message.content.startsWith("gái")) {message.channel.send("đâu? ra trình diện với Ten K", {files: ["./anh/dam.jpg"]});}
  if (message.content.startsWith("dm")) {message.channel.send("đứa nào bậy tao đập giờ", {files: ["./anh/pig.jpg"]});}
  if (message.content.startsWith("tuk")) {message.channel.send("Kao tuk dùm luôn nè", {files: ["./anh/tuk.jpg"]});}
  if (message.content.startsWith("Tuk")) {message.channel.send("Kao tuk dùm luôn nè", {files: ["./anh/tuk.jpg"]});}
  if (message.content.startsWith("dm bot")) {message.channel.send("Bot xin phép được dm bạn");}
  if (message.content.startsWith("??")) {message.channel.send("", {files: ["./anh/SuyNghi.png"]});}
  if (message.content.startsWith("na ní")) {message.channel.send(" ", {files: ["./anh/aas.jpg"]});}  
  if (message.content.startsWith("haha")) {message.channel.send(" ", {files: ["./anh/haha.gif"]});}
  if (message.content.startsWith("Hello")) {message.channel.send(" ", {files: ["./anh/hello.gif"]});}
  if (message.content.startsWith("à nhong")) {message.channel.send(" ", {files: ["./anh/hello.gif"]});}
  if (message.content.startsWith("Hế lô")) {message.channel.send(" ", {files: ["./anh/hello.gif"]});}
  if (message.content.startsWith("hế lô")) {message.channel.send(" ", {files: ["./anh/hello.gif"]});}
  if (message.content.startsWith("alo")) {message.channel.send(" ", {files: ["./anh/hello.gif"]});}
  if (message.content.startsWith("Alo")) {message.channel.send(" ", {files: ["./anh/hello.gif"]});}
  if (message.content.startsWith("a lô")) {message.channel.send(" ", {files: ["./anh/hello.gif"]});}
  if (message.content.startsWith("hello")) {message.channel.send(" ", {files: ["./anh/hello.gif"]});}
  if (message.content.startsWith("helo")) {message.channel.send(" ", {files: ["./anh/hello.gif"]});}
  if (message.content.startsWith("halo")) {message.channel.send(" ", {files: ["./anh/hello.gif"]});}
  if (message.content.startsWith("Haloo")) {message.channel.send(" ", {files: ["./anh/hello.gif"]});}
  if (message.content.startsWith("Halo")) {message.channel.send(" ", {files: ["./anh/hello.gif"]});}
  if (message.content.startsWith("hê lo")) {message.channel.send(" ", {files: ["./anh/hello.gif"]});}
  if (message.content.startsWith("fuck")) {message.channel.send(" ", {files: ["./anh/sex.png"]});}

  if (message.content.startsWith("ảnh Dưa")) {
	  number = 5;
	  var imageNumber = Math.floor(Math.random()*(number - 1 + 1)) + 1;
	  message.channel.send({files: ["./anh/Le/" + imageNumber + ".jpg"]});
  }  
  if (message.content.startsWith("ảnh Chang")) {
	  number = 6;
	  var imageNumber = Math.floor(Math.random()*(number - 1 + 1)) + 1;
	  message.channel.send({files: ["./anh/Chang/" + imageNumber + ".jpg"]});
  }
  if (message.content.startsWith("ảnh Linh")) {
	  if(message.author.id == oid){
	  number = 1;
	  var imageNumber = Math.floor(Math.random()*(number - 1 + 1)) + 1;
	  message.channel.send({files: ["./anh/Linh/" + imageNumber + ".jpg"]});
	  }
	  else { message.reply("Error! DM Admin to fix command");}
  }
 
  if (message.content.startsWith("ảnh Nhung")) {
	  if(message.author.id == oid){
	  number = 2;
	  var imageNumber = Math.floor(Math.random()*(number - 1 + 1)) + 1;
	  message.channel.send({files: ["./anh/Nhung/" + imageNumber + ".jpg"]});
	}
	   else { message.reply("Error! DM Admin to fix command");}
  }
	
  if (message.content.startsWith("Linh xida")) {
	  if(message.author.id == oid){
	  number = 2;
	  var imageNumber = Math.floor(Math.random()*(number - 1 + 1)) + 1;
	  message.channel.send({files: ["./anh/Linh2/" + imageNumber + ".jpg"]});
	  }
	   else { message.reply("Error! DM Admin to fix command");}
  }
  if (message.content.startsWith("keme K")) {
	  number = 2;
	  var imageNumber = Math.floor(Math.random()*(number - 1 + 1)) + 1;
	  message.channel.send({files: ["./anh/Linh2/" + imageNumber + ".jpg"]});
  }
  if (message.content.startsWith("ảnh Ly")) {
	  number = 4;
	  var imageNumber = Math.floor(Math.random()*(number - 1 + 1)) + 1;
	  message.channel.send({files: ["./anh/Ly/" + imageNumber + ".jpg"]});
  }

  if (message.content.startsWith("ảnh Bếu")) {
	  number = 1;
	  var imageNumber = Math.floor(Math.random()*(number - 1 + 1)) + 1;
	  message.channel.send({files: ["./anh/Beu/" + imageNumber + ".jpg"]});
  }
  
  if (message.content.startsWith("ảnh Kiệt")) {
	  number = 2;
	  var imageNumber = Math.floor(Math.random()*(number - 1 + 1)) + 1;
	  message.channel.send({files: ["./anh/Kiet/" + imageNumber + ".jpg"]});
  }
  
 // if (message.content.startsWith("ảnh Thi")) {
	//  number = 1;
	//  var imageNumber = Math.floor(Math.random()*(number - 1 + 1)) + 1;
	//  message.channel.send({files: ["./anh/Thi/" + imageNumber + ".jpg"]});
 // }
  
  if (message.content.startsWith("ảnh Tít")) {
	  number = 1;
	  var imageNumber = Math.floor(Math.random()*(number - 1 + 1)) + 1;
	  message.channel.send({files: ["./anh/Tit/" + imageNumber + ".jpg"]});
  }
  
  if (message.content.startsWith("ảnh Đức")) {
	  number = 1;
	  var imageNumber = Math.floor(Math.random()*(number - 1 + 1)) + 1;
	  message.channel.send({files: ["./anh/Duc/" + imageNumber + ".jpg"]});
  }
  
  if (message.content.startsWith("ảnh Ber")) {
	  number = 4;
	  var imageNumber = Math.floor(Math.random()*(number - 1 + 1)) + 1;
	  message.channel.send({files: ["./anh/Ber/" + imageNumber + ".jpg"]});
  }
  if (message.content.startsWith("dm bot")) {message.channel.send("Bậy nè");}
  if (message.content.startsWith("bye")) {message.channel.send("Thả chó, tiễn khách");}
  if (message.content.startsWith("@@")) {message.channel.send("O_o");}
  if (message.content.startsWith("con khôi")) {message.channel.send("muốn bị đụ hả");}
  if (message.content.startsWith("con khoi")) {message.channel.send("Viết có dấu đi ko lại ăn cháo bây giờ");}
  if (message.content.startsWith("Con khôi")) {message.channel.send("Vả gãy răng giờ");}
  if (message.content.startsWith("iu thươn")) {
	  //return message.reply(`Học không lo học suốt ngày thính cc `).then(m => m.delete(5000))
        const random = array[Math.floor(Math.random() * array.length)]
        message.channel.send(random);}
  if (message.content.startsWith("Ten K là ai")) {message.channel.send("Hoàng thượng vạn tuế, vạn vạn tuế!!");}
  if (message.content.startsWith("cú lừa")) {message.channel.send("lừa cc");}
  if (message.content.startsWith("lễ tân đâu")) {message.channel.send("Dạ, em đây.");}
  if (message.content.startsWith("rên thử coi")) {message.channel.send("ư ư kimochi");}
  if (message.content.startsWith("lễ tân làm gì")) {message.channel.send("Vui lòng khách đến, vừa lòng khách đi.");}
  if (message.content.startsWith("cu lua")) {message.channel.send("Lừa cc");}
  if (message.content.startsWith("làm tốt anh có thưởng")) {message.channel.send("Dạ <3");}
  
});

client.login(token);
