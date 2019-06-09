const Telegraf = require('telegraf');
const fs = require('fs');
const name = 'echo-example-bot';
const username = 'echo_example_bot';
const token = '859710407:AAEUIFGgagFtVmff_e_M4Igtn0oVNwDPqxc';
const JSON = require('circular-json');
const fetch = require('node-fetch');
const weather = require('./weather/');
// path = 'contex.json'

// const getCircularReplacer = () => {
//     const seen = new WeakSet();
//     return (key, value) => {
//         if (typeof value === "object" && value !== null) {
//             if (seen.has(value)) {
//                 return;
//             }
//             seen.add(value);
//         }
//         return value;
//     };
// };


const bot = new Telegraf(token);
bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.hears('test', (ctx) => {
    // fs.exists(path, function (exists) {
    //     if (!exists) {
            console.log(ctx.update.message.chat.id);
            fs.writeFile('contex.json', JSON.stringify(ctx), function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
            ctx.reply('Hey there');
        // } else {
            // console.log('missed!');
        // }
    // })
});
bot.hears('/weather', async (ctx) => {
    ctx.reply( await weather());
});

bot.hears(/\/weather (.+)/, async (ctx) => {
    // console.log(ctx.match[1]);
    ctx.reply( await weather(ctx.match[1]));

});




bot.launch();



