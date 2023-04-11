/*

* Base ini di buat oleh Kaze menggunakan
* https://www.npmjs.com/package/whasapi

* Base ini di buat sesimple mungkin sama
* seperti whasapi.
* Bantu kembangkan base ini dengan cara pull
* Terimakasih

*/
const { Client, CommandHandler } = require("whasapi");
const path = require("path");
const bot = new Client({
  name: "BRAINBOTZ",
  prefix: ".",
  owners: '6282217590187',
  autoRead: true,
});

bot.ev.once('ready', (m) => {
  console.log(`ready at ${m.user.id}`);
});

process.on('uncaughtException', function (err) {
  console.error(err);
});

const cmdHandler = new CommandHandler(bot, `${path.resolve()}/commands/`);
cmdHandler.load();

bot.command({
  name: `reload`,
  code: async(kaze) => {
    if (kaze.isOwner() == false) return kaze.react(kaze.id, "😨")
    try { 
    kaze.reply({text: `done`})
    cmdHandler.load() 
  } catch(err) {
    kaze.reply({text: `${err}`})
  }
  }
})

bot.launch();