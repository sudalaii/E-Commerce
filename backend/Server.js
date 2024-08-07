const express = require("express")
const app = express()
const session = require('express-session');
app.use(express.json())
const cors = require("cors")
app.use(cors())
const path = require("path");
app.use('/resources/uploads', express.static(path.join(__dirname, 'resources/uploads')));

app.use(session({
    secret: 'your-secret-key', // Replace with a strong, unique secret key
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set secure to true if using HTTPS
}))

const mongoose = require("mongoose")
const MONGODB_URL = "mongodb://localhost:27017/electronics001"


const productroutes=require("./Routers/ProductRoutes")
app.use(productroutes)




const userRoutes=require("./Routers/UserRouter")
app.use(userRoutes)

mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log("conncetion sucessfully")
    })
    .catch((err) => {
        console.log("db not connect", err)
    })


app.listen(3001, () => {
    console.log("Listening on port 3001");
  });