require('dotenv').config()

let pact = require('@pact-foundation/pact-node');
console.log('username', process.env.PACT_BROKER_USERNAME)
let opts = {
  pactFilesOrDirs: [`${process.cwd()}/pact/pacts`],
  pactBroker: process.env.PACT_BROKER_URL,
  pactBrokerUsername: process.env.PACT_BROKER_USERNAME,
  pactBrokerPassword: process.env.PACT_BROKER_PASSWORD,
  consumerVersion: '0.0.1'
};

pact.publishPacts(opts).then(function () {
	// do something
});
