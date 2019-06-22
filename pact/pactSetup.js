const path = require('path');
const { Pact } = require('@pact-foundation/pact');

global.port = 8989;
global.provider = new Pact({
  port: global.port,
  log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
  dir: path.resolve(process.cwd(), 'pact', 'pacts'),
  spec: 2,
  cors: true,
  pactfileWriteMode: 'update',
  consumer: 'EQ - TCM UI',
  provider: 'EQ - TCM Server'
});
