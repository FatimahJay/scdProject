const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");

router.get("/", getProducts); //get all prods from db
router.get("/:id", getProductById);

module.exports = router;

//mongodb+srv://Fatima:<product>@cluster0.q5lwsjl.mongodb.net/shop?retryWrites=true&w=majority