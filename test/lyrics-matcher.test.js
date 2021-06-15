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
