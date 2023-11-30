Hi Team,

My Name is Harshit Bhardwaj, currently working as an Associate Consultant QA in GlobalLogic India Pvt. Ltd. 

This cypress project talks about Pokemon API "https://pokeapi.co/api/v2/" and here particulary GET call "https://pokeapi.co/api/v2/pokemon/{id or name}/".

Following are the things kept in mind in order to complete validation:
  1. For ID :
     a. Validated - Without providing an id
     
     b. Validated - Providing a valid id
     
     c. Validated - Providing an invalid id
     
     d. Validated - Providing a non-existent id

3. For Name :
     a. Validated - Without providing a name
   
     b. Validated - Providing a valid name
   
** Invalid name has been validated but that is just returning 404 so not added as the separate test case.

Follwowing are the assertions kept in mind in order to perform the schema validations:
  1. Status Code
  2. Key properties and it's value
  3. Properties of Json Array -> it's Index + Value
  4. Nested Json Array -> Index -> Index + Value

** As per the response received, above are the options we can take in order to completely verify the data received from the server.

Following are the verions of the tools used in this project:
  1. NodeJs : v20.4.0
  2. Git : 2.41.0.windows.1
  3. Cypress : 13.6.0
  4. Jenkins : 2.434
  5. Assertion : Chai

** Jenkins file is yet to be pushed
