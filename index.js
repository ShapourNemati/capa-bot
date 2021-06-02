const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const express = require('express')
 
const token = process.env.TELEGRAM_TOKEN;
let bot;
 
if (process.env.NODE_ENV === 'production') {
   bot = new TelegramBot(token);
   bot.setWebHook(process.env.HEROKU_URL + bot.token);
} else {
   bot = new TelegramBot(token, { polling: true });
}

console.log(token)

bot.onText(/.*/, (msg, _) => {
    console.log('received message: ', msg)
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Non ora signor giudice, so giocando ai videogames!", { parse_mode: 'HTML' });
});

const app = express();

app.listen(process.env.PORT);
 
app.post('/' + bot.token, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});