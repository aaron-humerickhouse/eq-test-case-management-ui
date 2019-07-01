const {Pact, axios, URL, Matchers } = require('../pact_helper')

describe('The API', () => {

  // Copy this block once per interaction under test
  describe('Companies'/* The API interaction being tested in words (string) */, () => {
    beforeEach(() => {
      const interaction = {
        state: "With a company with id of 1",
        uponReceiving: 'Update Company'/* Describe the request in words (string) */,
        withRequest: {
          method:  'PUT'/* 'GET' or 'POST' or whatever (string) */,
          path:  '/companies/1'/* '/foo/bar' (string) */,
          query:  ''/* '?query=parameters' (string) */,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            /* etc */
          },
          body: Matchers.like({
            id: 1,
            name: 'Pact'
          })
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
            /* etc */
          },
          body: { id: Matchers.like(1), name: "Pact" }/* describe the body (object using the Pact DSL)*/
        }
      };
      return provider.addInteraction(interaction);
    });

    // add expectations
    it('returns a company', done => {
      axios.put(`${URL}/companies/1`, 
        { id: 1, name: 'Pact' },
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      )
        .then(response => {
          expect(response.status).toEqual(200);
          expect(response.data).toEqual(
            /* check the response here, using the default values provided to the Pact DSL */
            { id: 1, name: "Pact" }
          );
        })
        .then(done);
    });
  });  
});
