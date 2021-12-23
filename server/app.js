const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
app.get("/",(req,res)=>{
    res.send("Hello")
})

const db = require("../config/keys").mongoURL


mongoose.connect(db, { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => { console.log("database connected succesfully") })
    .catch(err => {
        console.log("Unable to connect with the database")
    });

app.listen(3000,()=>console.log("Server is running"));

