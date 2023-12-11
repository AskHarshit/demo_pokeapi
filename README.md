Hi Team,

My Name is Harshit Bhardwaj, currently working as an Associate Consultant QA in GlobalLogic India Pvt. Ltd. Let's talk more about experience while being on the call :)

This cypress project talks about Pokemon API "https://pokeapi.co/api/v2/" and here particulary GET call "https://pokeapi.co/api/v2/pokemon/{id or name}/".

Below are the assertions kept in mind in order to perform the schema validations:
1. Check the response status code.
2. Check the response body contains string.
3. Check the response body contains array of the string.
4. Check the response body contains nested string.
5. Check the response values are as expected.
6. API chaining

Below are the things kept in mind in order to complete above validations:

  1. For Name : Status code, Strings, Arrays, Nested Array, API chaining
     
     a. Validate the name of a pokemon (by saving the response first and then pass it) - Parameterization
   
     b. Validate 'Moves' schema (nested json) of a pokemon
     
  3. For ID : Status code, strings, Positive & Negative Test cases
     
     a. Validated - Without providing an id
     
     b. Validated - Providing a valid id
     
     c. Validated - Providing an invalid id
     
     d. Validated - Providing a non-existent id

  Note that the parameterization in ID related test cases can also achieved with no issues but validated only in 'Name'

** Invalid name has been validated but that is just returning 404 so not added as the separate test case. This test cases has been validated in ID.


Below are the verions of the tools used in this project:
  1. NodeJs : v20.4.0
  2. Git : 2.41.0.windows.1
  3. Cypress : 13.6.0
  4. Jenkins : 2.434
  5. Assertion Library : Chai
  6. MochaAwesome Report : 7.1.3

