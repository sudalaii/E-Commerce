const ProductModel= require("../Models/ProductModel");
const multer = require("multer")
const path = require("path")
const storage = multer.diskStorage({
     destination: function (req, file, cb) {
          cb(null, "resources/uploads/")
     },
     filename: function (req, file, cb) {
          cb(null, Date.now() + path.extname(file.originalname))
     }
});
const upload = multer({ storage: storage })
exports.insert = [
     upload.single('image'),
     (req, res) => {
          const Product = new ProductModel({
               productbrand :req.body.productbrand,
               productname :req.body.productname,
               productdis:req.body.productdis,
               productoff:req.body.productoff,
               productprice:req.body.productprice,
               Image: req.file.filename
          })
          Product.save()
               .then((ele) => {
                    res.send(ele)
               })
               .catch((err) => {
                    res.send(err)
               })
     }]
exports.list=[(req,res)=>{
     ProductModel.find()
     .then((product)=>{
          res.send(product)
     })
     .catch((err)=>{
         res.send(err)
     })

     
}]