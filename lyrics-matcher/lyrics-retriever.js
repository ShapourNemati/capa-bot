const veritaSupposte = require('../lyrics/verita_supposte');
const exuvia = require('../lyrics/exuvia');

/**
 * Build the lyrics corpus
 * @return {object} the lyrics corpus
 */
function buildCorpus() {
  return {
    albums: {
      veritaSupposte,
      exuvia,
    },
  };
};

module.exports = buildCorpus;
