const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoryId: { type: Number, required: false },
  categoryName: { type: String, required: true, default: 'Technology'},
});

const Category = mongoose.model("category", categorySchema);
module.exports = Category;
