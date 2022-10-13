const express=require("express")
const app=express();
const mongoose=require("mongoose")
const dotenv=require("dotenv");
const UserRoute=require('./routes/User')
const authRoute=require('./routes/auth')
const OrderRoute=require('./routes/Order')
const CartRoute=require('./routes/Cart')
const ProductRoute=require('./routes/Product')
dotenv.config()
mongoose.connect(process.env.Mongo_Url
    
).then(()=>console.log("db successfull")).catch((err)=>{
    console.log(err)
})
app.use(express.json())
app.use("/api/user",UserRoute)
app.use("/api/auth",authRoute)
app.use("/api/products", ProductRoute);
app.use("/api/carts", CartRoute);
app.use("/api/orders", OrderRoute);

app.get("/api/test",()=>{
    console.log("test is successful")
})
app.listen(process.env.PORT||5000,()=>{

})