const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const category = require("../model/category")


const productSchema = new Schema({
  productName: { type: String, required: true },
  qtyPerUnit: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  unitStock: { type: Number, required: true },
  discontinued: { type: Boolean, default: false },
  categoryId : {
    type: Schema.Types.ObjectId,
    ref: 'category',
  }
});

const Products = mongoose.model("Products", productSchema);
module.exports = Products;