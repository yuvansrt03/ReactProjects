const express = require("express")
const app=express()
const multer = require('multer')
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/assets");
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname)
    },
  });

  const upload = multer({ storage:multerStorage});
app.get("/upload",(req,res)=>{
    res.send(req.body)
})

app.listen(5000,()=>{
    console.log("listening...")
})
















// const Product=require("./model/productModel")
// app.use(express.json())
// app.get("/",(req,res)=>{
//     console.log("Hey")
//     res.json({ user: 'geek' }); 
// })
// app.get("/products",(req,res)=>{

// })
// app.post("/products",async (req,res)=>{
//     try {
//         const product=await Product.create(req.body)
//         console.log(req.body)
//         res.status(200).send(product)     
//     } catch (error) {
//         console.log(error)
//         res.status(500).send({message:error.message})
//     }
// })
// const mongoose = require("mongoose")
// mongoose.connect("mongodb+srv://admin:admin@cluster0.rkzrgfn.mongodb.net/Node-Api?retryWrites=true&w=majority").then(()=>{
//     app.listen(3000,()=>{
//         console.log("app is listening")
//     })
// }).catch((error)=>{
//     console.log(error.message)
// })
