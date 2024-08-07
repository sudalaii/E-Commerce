const express=require("express")
const router=express.Router()
const ProductController=require("../Controllers/ProductController")
router.post("/product/insert",ProductController.insert)
router.get("/product/list",ProductController.list)
module.exports=router ;
