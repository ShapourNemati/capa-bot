const tap = require('tap');
const lyricsRetriever = require('../lyrics-matcher/lyrics-retriever');
const lyricsMatcher = require('../lyrics-matcher/lyrics-matcher');

tap.test('line correctly matched', (t) => {
  const lyricsCorpus = lyricsRetriever();
  const matcher = lyricsMatcher(lyricsCorpus);
  const result = matcher('Fuori di me, exuvia');
  const expected = 'Spiego le ali, au revoir';
  t.equal(result, expected);
  t.end();
});

tap.test('line correctly matched - commas not considered', (t) => {
  const lyricsCorpus = lyricsRetriever();
  const matcher = lyricsMatcher(lyricsCorpus);
  const result = matcher('Fuori di me exuvia');
  const expected = 'Spiego le ali, au revoir';
  t.equal(result, expected);
  t.end();
});

tap.test('line correctly matched - capitalization not considered', (t) => {
  const lyricsCorpus = lyricsRetriever();
  const matcher = lyricsMatcher(lyricsCorpus);
  const result = matcher('fuori di me exuvia');
  const expected = 'Spiego le ali, au revoir';
  t.equal(result, expected);
  t.end();
});

tap.test('no line matches', (t) => {
  const lyricsCorpus = lyricsRetriever();
  const matcher = lyricsMatcher(lyricsCorpus);
  const result = matcher('This text does not appear in any of Capa\'s songs');
  const expected = '';
  t.equal(result, expected);
  t.end();
});
