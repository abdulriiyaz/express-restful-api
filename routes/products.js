const express = require("express");
const router = express.Router();
const Products = require("../model/products");
const Category = require("../model/category");

//REQUEST: post a product
router.post("/create", async (req, res) => {
  const newCategory = new Category({
    categoryId: Date.now(),
    categoryName: req.body.categoryName,
  });

  const newProduct = await new Products({
    productName: req.body.productName,
    qtyPerUnit: req.body.qtyPerUnit,
    unitPrice: req.body.unitPrice,
    unitStock: req.body.unitStock,
    discontinued: req.body.discontinued,
    categoryId: new Category(),
    category: newCategory
  });

  newCategory.save()
  .catch(err => {
    res.status(400).json(`Error ${err}`);

  })

  newProduct
    .save()
    .then(() => res.json("Product and Category posted successfully!"))
    .catch((err) => res.status(400).json(`Error ${err}`));
});

//REQUEST: get all products
router.get("/readAll", async (req, res) => {
  try {
    const products = await Products.find();
    const category = await Category.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
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

  Category.findByIdAndDelete;(req.params.id)
});

module.exports = router;
