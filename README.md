# A RESTful API 
## Create/Update/Read/Delete from persistant database


The server is built using express and mongoDB is used for nosql database.

- Operations that can be executed
- ✨Create ✨
- ✨Update ✨
- ✨Read ✨
- ✨Delete ✨

## Features

- **/create** will create the product and category.
- **/read/:id** will read particular record from the product table (if product has any category then category should be fetched in the response)
- **/readAll** will all the records from the product table (if product has any category then category should be fetched in the response)
- **/update/:id** will update one particular record of the product
- **/delete/:id** will delete one particular record of the product.



## Installation

 requires :
 [Node.js](https://nodejs.org/) v10+ to run.
Install the dependencies and devDependencies and start the server.

```sh
cd express-restful-api
npm i
node app
```

## Setup Environment Variables
- create .env file in root directory
- Set Variable DB_CONNECTION to the URI provided by MongoDB
- Set PORT (e.g: 3000)

### Try it on [POSTMAN](https://www.postman.com/) 

## Preview


## License
MIT