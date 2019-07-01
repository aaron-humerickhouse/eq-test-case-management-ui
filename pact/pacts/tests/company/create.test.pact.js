const {Pact, axios, URL, Matchers } = require('../pact_helper')

describe('The API', () => {

  // Copy this block once per interaction under test
  describe('Companies'/* The API interaction being tested in words (string) */, () => {
    beforeEach(() => {
      const interaction = {
        uponReceiving: 'Create Company'/* Describe the request in words (string) */,
        withRequest: {
          method:  'POST',
          path:  '/companies',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: Matchers.like({ 'name': 'Pact' })
        },
        willRespondWith: {
          status: 201,
          headers: {
            'Content-Type': 'application/json'
            /* etc */
          },
          body: Matchers.like({ id: 1, name: "Pact" })/* describe the body (object using the Pact DSL)*/
        }
      };
      return provider.addInteraction(interaction);
    });

    // add expectations
    it('returns the newly created company', done => {
      axios.post(`${URL}/companies`, 
        {name: 'Pact'},
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: {
            name: 'Pact'
          }
        }
      )
        .then(response => {
          expect(response.status).toEqual(201)
          expect(response.data).toEqual(
            /* check the response here, using the default values provided to the Pact DSL */
            { id: 1, name: "Pact" }
          );
        })
        .then(done);
    });
  });  
});
