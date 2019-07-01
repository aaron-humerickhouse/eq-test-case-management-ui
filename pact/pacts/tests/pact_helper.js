require('dotenv').config()

const { Pact } = require('@pact-foundation/pact');
// const { api } require(/* wherever */);   // This is your client-side API layer
const axios = require('axios');

const URL = `${process.env.PACT_HOST}:${process.env.PACT_PORT}`;

const { Matchers } = require("@pact-foundation/pact")

module.exports = {Pact, axios, URL, Matchers}
