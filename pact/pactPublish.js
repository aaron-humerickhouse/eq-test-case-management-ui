require('dotenv').config()

let pact = require('@pact-foundation/pact-node');
console.log('travis commit', process.env.TRAVIS_COMMIT)

let opts = {
  pactFilesOrDirs: [`${process.cwd()}/pact/pacts`],
  pactBroker: process.env.PACT_BROKER_URL,
  pactBrokerUsername: process.env.PACT_BROKER_USERNAME,
  pactBrokerPassword: process.env.PACT_BROKER_PASSWORD,
  consumerVersion: process.env.TRAVIS_COMMIT
};

pact.publishPacts(opts).then(function () {
	// do something
});
