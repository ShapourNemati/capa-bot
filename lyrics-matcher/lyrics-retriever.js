const exuvia = require('../lyrics/exuvia/exuvia');

/**
 * Build the lyrics corpus
 * @return {object} the lyrics corpus
 */
function buildCorpus() {
  return {
    albums: {
      exuvia: {
        exuvia,
      },
    },
  };
};

module.exports = buildCorpus;
