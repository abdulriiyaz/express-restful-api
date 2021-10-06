require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
const db = mongoose.connection

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true}
)

db.once('open', (err, db) => {
    console.log('Connected to database')
})

const productsRouter = require("./routes/products");
app.use("/product", productsRouter);

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})