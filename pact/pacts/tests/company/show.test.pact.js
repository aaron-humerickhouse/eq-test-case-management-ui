const {Pact, axios, URL, Matchers } = require('../pact_helper')

describe('The API', () => {

  // Copy this block once per interaction under test
  describe('Companies'/* The API interaction being tested in words (string) */, () => {
    beforeEach(() => {
      const interaction = {
        state: "With a company with id of 1",
        uponReceiving: 'Get Company'/* Describe the request in words (string) */,
        withRequest: {
          method:  'GET'/* 'GET' or 'POST' or whatever (string) */,
          path:  '/companies/1'/* '/foo/bar' (string) */,
          query:  ''/* '?query=parameters' (string) */,
          headers: {
            'Accept': 'application/json',
            /* etc */
          }
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
            /* etc */
          },
          body: { id: Matchers.like(1), name: "ACME Corp" }/* describe the body (object using the Pact DSL)*/
        }
      };
      return provider.addInteraction(interaction);
    });

    // add expectations
    it('returns a company', done => {
      axios.get(`${URL}/companies/1`, {
        headers: {
          'Accept': 'application/json',
        }
      })
        .then(response => {
          expect(response.status).toEqual(200);
          expect(response.data).toEqual(
            /* check the response here, using the default values provided to the Pact DSL */
            { id: 1, name: "ACME Corp" }
          );
        })
        .then(done);
    });
  });  
});
