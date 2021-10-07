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
- **/read/:id** will read particular record from the product table (if product has any category then category will be fetched in the response)
- **/readAll** will all the records from the product table (if product has any category then category will be fetched in the response)
- **/update/:id** will update one particular record of the product
- **/delete/:id** will delete one particular record of the product.



## Installation & Setup Environment Variables
- create .env file in root directory
- Set Variable DB_CONNECTION to the URI provided by MongoDB
- Set PORT (e.g: 3000)

 requires :
 
 [Node.js](https://nodejs.org/) v10+ to run.
Install the dependencies and devDependencies and start the server.

```sh
cd express-restful-api
npm i
node app
```

## APIs

- localhost:3000/product/create
- localhost:3000/product/readAll
- localhost:3000/product/delete/[:id]
- localhost:3000/product/read/[:id]
- localhost:3000/product/update/[:id]

## JSON
**Creating Product**
```sh
{
    "productName": "Moto X",
    "qtyPerUnit": 7800,
    "unitPrice": 1299,
    "unitStock": 8000,
    "discontinued": false
}
```
**Updating Product**
```sh
{
    "category": {
      "categoryName": "safe"
    },
    "productName": "Changing  Product",
    "qtyPerUnit": 9865,
    "unitPrice": 500,
    "unitStock": 22,
    "discontinued": false
  }
```
### Response
```sh
[
  {
    "_id": "615e8b50521edcd7967dccfb",
    "productName": "Changing  Product",
    "qtyPerUnit": 9865,
    "unitPrice": 500,
    "unitStock": 22,
    "discontinued": false,
    "categoryId": "615e8b50521edcd7967dccfa",
    "__v": 0
  },
  {
    "_id": "615e8d8b521edcd7967dcd08",
    "productName": "iPhone X",
    "qtyPerUnit": 2124,
    "unitPrice": 1000,
    "unitStock": 4554,
    "discontinued": false,
    "categoryId": "615e8d8b521edcd7967dcd07",
    "__v": 0
  },
  {
    "_id": "615e8da6521edcd7967dcd0d",
    "productName": "Samsung",
    "qtyPerUnit": 854,
    "unitPrice": 1121,
    "unitStock": 414,
    "discontinued": true,
    "categoryId": "615e8da6521edcd7967dcd0c",
    "__v": 0
  }
]
```




### Try it on [POSTMAN](https://www.postman.com/) 
## License
MIT