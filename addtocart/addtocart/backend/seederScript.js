require("dotenv").config();

const productData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");



const importData = async () => {
  try {
    await connectDB();
    await Product.deleteMany({}); //deletes all current data in db

    await Product.insertMany(productData); //insert everything prod data

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
