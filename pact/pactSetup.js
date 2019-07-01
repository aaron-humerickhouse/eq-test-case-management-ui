const path = require('path');
const { Pact } = require('@pact-foundation/pact');
require('dotenv').config()

global.provider = new Pact({
  port: Number.parseInt(process.env.PACT_PORT),
  log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
  dir: path.resolve(process.cwd(), 'pact', 'pacts'),
  spec: 2,
  cors: true,
  pactfileWriteMode: 'update',
  consumer: 'EQ - TCM UI',
  provider: 'EQ - TCM Server'
});
