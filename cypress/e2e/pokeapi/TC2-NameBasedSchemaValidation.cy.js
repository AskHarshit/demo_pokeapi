/// <reference types = "Cypress" />

//const dataJson = require('../../fixtures/testdata')
//https://pokeapi.co/api/v2/pokemon/?offset=01&limit=35

describe('pokemon api testing demo w.r.t name', ()=>{
    
        it('Without providing a name', {tags: ['@regression']}, ()=>{

            cy.request({
                    method: 'GET',
                    url : 'https://pokeapi.co/api/v2/pokemon/',
            }).then((resp)=>{
                cy.log(resp.body)
                expect(resp.status).to.eq(200)
                expect(resp.body.count).to.eq(1292)
                expect(resp.body.results[0].name).to.eq("bulbasaur")
                })
            })
        it('Providing a valid name ', {tags: ['@sanity']}, ()=>{

              cy.request({
                      method: 'GET',
                      url : 'https://pokeapi.co/api/v2/pokemon/bulbasaur/',
              }).then((resp)=>{
                  cy.log(resp.body)
                  expect(resp.status).to.eq(200)
                  expect(resp.body.name).to.eq("bulbasaur")
                  expect(resp.body).has.property('weight',69)
                  expect(resp.body.moves[0].version_group_details[0].move_learn_method.name).to.eq("egg")
                  })
              })
})