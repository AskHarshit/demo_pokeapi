/// <reference types = "Cypress" />

//const dataJson = require('../../fixtures/testdata')
//https://pokeapi.co/api/v2/pokemon/?offset=01&limit=35

describe('pokemon api testing demo w.r.t name', ()=>{
    
        it('Validate the name of a pokemon (by saving the response first and then pass it)', {tags: ['@regression']}, ()=>{

            cy.request({
                    method: 'GET',
                    url : 'https://pokeapi.co/api/v2/pokemon',
            }).then((resp)=>{
                
                const firstpokemon = resp.body.results[0].name
                return firstpokemon
                })
                .then((firstpokemon)=>{
                                        cy.request({
                                        method: 'GET',
                                        url : 'https://pokeapi.co/api/v2/pokemon/'+firstpokemon,
                                        }).then((resp)=>{
                                            cy.log(resp.body)
                                            expect(resp.status).to.eq(200)
                                            expect(resp.body.name).to.eq("bulbasaur")
                                            })
                })
            })
        it("Validate 'Moves' schema (nested json) of a pokemon", {tags: ['@sanity']}, ()=>{

              cy.request({
                      method: 'GET',
                      url : 'https://pokeapi.co/api/v2/pokemon/',
              }).then((resp)=>{

                const firstpokemon = resp.body.results[0].name
                return firstpokemon
                })
                .then((firstpokemon)=>{
                                    cy.request({
                                    method: 'GET',
                                    url : 'https://pokeapi.co/api/v2/pokemon/'+firstpokemon,
                                    }).then((resp)=>{
                                        cy.log(resp.body)
                                        expect(resp.status).to.eq(200)
                                        expect(resp.body).has.property('weight',69)
                                        expect(resp.body.moves[0].version_group_details[0].move_learn_method.name).to.eq("egg")
                                        })
                                
                  })
              })
})