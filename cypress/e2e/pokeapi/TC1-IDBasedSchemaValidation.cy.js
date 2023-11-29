/// <reference types = "Cypress" />

const dataJson = require('../../fixtures/testdata')
//https://pokeapi.co/api/v2/pokemon/?offset=01&limit=35

describe('pokemon api testing demo w.r.t id', ()=>{

        it('Without providing an id', {tags: ['@regression']}, ()=>{

            cy.request({
                    method: 'GET',
                    url : 'https://pokeapi.co/api/v2/pokemon/',
            }).then((resp)=>{
                cy.log(resp.body)
                expect(resp.status).to.eq(200)
                expect(resp.body.count).to.eq(1292)
                })
            })
        it('Providing a valid id', {tags: ['@regression']}, ()=>{

              cy.request({
                      method: 'GET',
                      url : 'https://pokeapi.co/api/v2/pokemon/9/',
              }).then((resp)=>{
                  cy.log(resp.body)
                  expect(resp.status).to.eq(200)
                  expect(resp.body.name).to.eq("blastoise")
                  expect(resp.body).has.property('weight',855)
                  // expect(resp.body.photoUrls[0]).to.eq("string")
                  // expect(resp.body.tags[0].name).to.eq("bhardwaj")
                  })
              })
        it('Providing an invalid id', {tags: ['@sanity']}, ()=>{

                cy.request({
                        method: 'GET',
                        url : 'https://pokeapi.co/api/v2/pokemon/1018/',
                        failOnStatusCode: false
                }).then((resp)=>{
                    cy.log(resp.body)
                    expect(resp.status).to.eq(404)
                    })
                })

        it('Providing a non-existent id', {tags: ['@sanity']}, ()=>{

                cy.request({
                          method: 'GET',
                          url : 'https://pokeapi.co/api/v2/pokemon/10276/',
                          failOnStatusCode: false
                }).then((resp)=>{
                      cy.log(resp.body)
                      expect(resp.status).to.eq(404)
                      })
                })
  


})