const exuvia = require('../lyrics/exuvia');

/**
 * Build the lyrics corpus
 * @return {object} the lyrics corpus
 */
function buildCorpus() {
  return {
    albums: {
      exuvia,
    },
  };
};

module.exports = buildCorpus;
