const {Pact, axios, URL, Matchers } = require('../pact_helper')

describe('The API', () => {

  // Copy this block once per interaction under test
  describe('Companies'/* The API interaction being tested in words (string) */, () => {
    beforeEach(() => {
      const interaction = {
        state: "With a company with id of 1",
        uponReceiving: 'Delete Company'/* Describe the request in words (string) */,
        withRequest: {
          method:  'DELETE'/* 'GET' or 'POST' or whatever (string) */,
          path:  '/companies/1'/* '/foo/bar' (string) */,
          query:  ''/* '?query=parameters' (string) */,
          headers: {
            'Accept': 'application/json',
            /* etc */
          }
        },
        willRespondWith: {
          status: 204,
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
            /* etc */
          }
        }
      };
      return provider.addInteraction(interaction);
    });

    // add expectations
    it('returns a company', done => {
      axios.delete(`${URL}/companies/1`, {
        headers: {
          'Accept': 'application/json',
        }
      })
        .then(response => {
          expect(response.status).toEqual(204);
          expect(response.data).toEqual('');
        })
        .then(done);
    });
  });  
});
