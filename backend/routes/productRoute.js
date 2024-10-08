const express=require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getOneProduct } = require("../controllers/productController");


const router=express.Router();

router.route("/products").get(getAllProducts)
router.route("/product/new").post(createProduct)
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getOneProduct)





module.exports=router