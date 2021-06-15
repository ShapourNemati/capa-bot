const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');

const lyricsRetriever = require('./lyrics-matcher/lyrics-retriever');
const lyricsMatcher = require('./lyrics-matcher/lyrics-matcher');

const lyricsCorpus = lyricsRetriever();
const matcher = lyricsMatcher(lyricsCorpus);

const token = process.env.TELEGRAM_TOKEN;
let bot;

if (process.env.NODE_ENV === 'production') {
  bot = new TelegramBot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
} else {
  bot = new TelegramBot(token, {polling: true});
}

console.log(token);

bot.on('message', (msg) => {
  console.log('on message', msg);
  const chatId = msg.chat.id;
  const match = matcher(msg.text);
  if (match) {
    bot.sendMessage(chatId, match);
  }
});

const app = express();

app.use(bodyParser.json());

app.listen(process.env.PORT);

app.post('/' + bot.token, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});
