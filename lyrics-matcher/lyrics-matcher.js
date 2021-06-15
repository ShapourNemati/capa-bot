/**
 * Build the function that matches against the given corpus.
 * @param {object} corpus the collection of all albums and songs.
 * @return {function} a function that returns \
 * the line after the matched one, if any, empty string otherwise.
 */
function buildMatcher(corpus) {
  return (text) => {
    // eslint-disable-next-line guard-for-in
    for (const album in corpus.albums) {
      // eslint-disable-next-line guard-for-in
      for (const song in corpus.albums[album]) {
        console.log(corpus.albums[album][song].lyrics);
        const lyricsLines = corpus.albums[album][song].lyrics.split('\n');
        // eslint-disable-next-line guard-for-in
        for (const line of lyricsLines) {
          if (text === line) {
            return lyricsLines[lyricsLines.indexOf(line) + 1];
          }
        }
      }
    }
    return '';
  };
}

module.exports = buildMatcher;