const express = require("express");
const router = express.Router();
const Products = require("../model/products");
const Category = require("../model/products");


//REQUEST: post a product
router.post("/create", (req, res) => {
  const newProduct = new Products({
    productName: req.body.productName,
    qtyPerUnit: req.body.qtyPerUnit,
    unitPrice: req.body.unitPrice,
    unitStock: req.body.unitStock,
    discontinued: req.body.discontinued,
    categoryId: Date.now(),
    category: {
      categoryName: req.body.category.categoryName,
    },
  });

  const newCategory = new Category({
    category: {
      categoryName: req.body.category.categoryName,
    },
  });

  newCategory
  .save()

  newProduct
    .save()
    .then(() => res.json("The New Product posted successfully!"))
    .catch((err) => res.status(400).json(`Error ${err}`));
});

//REQUEST: get all products
router.get("/readAll", (req, res) => {
  Products.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//REQUEST: update a product
router.patch("/update/:id", (req, res) => {
  Products.findById(req.params.id)
    .then((product) => {
      product.productName = req.body.productName;
      product.qtyPerUnit = req.body.qtyPerUnit;
      product.unitPrice = req.body.unitPrice;
      product.unitStock = req.body.unitStock;
      product.discontinued = req.body.discontinued;
      product.categoryName = req.body.category.categoryName;

      product
        .save()
        .then(() => res.json("product is UPDATED!"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//REQUEST: get one product
router.get("/read/:id", (req, res) => {
  Products.findById(req.params.id)
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//REQUEST: delete a product
router.delete("/delete/:id", (req, res) => {
  Products.findByIdAndDelete(req.params.id)
    .then(() => res.json("product is Deleted!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
