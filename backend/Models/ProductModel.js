const mongoose=require("mongoose")
const ProductSchema=new mongoose.Schema({
    productbrand :{type:String,require:true},
    productname :{type:String,require:true},
    productdis:{type:String,require:true},
    productoff:{type:String,require:true},
    productprice:{type:Number,require:true},
    Image:{type:String}
},{timestamps:true})
const ProductModel=new mongoose.model("Product",ProductSchema)
module.exports=ProductModel

