const express = require("express");
const app=express();
const productRoute= require("./routes/route");


const cors = require('cors')
const bodyparser = require('body-parser')
require('dotenv').config();

const port=process.env.PORT || 7000;
require("./config/dbconnection")


app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.json())
app.use(require("./routes/productRoutes"));
app.use(require("./routes/wishlistAndFavRoutes"));

app.use("/v1",productRoute)

app.listen(port, ()=>{
    console.log("app run on:  "+port)
})
