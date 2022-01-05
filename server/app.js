const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const cors = require("cors")
const doctoriRouter = require("./routes/Doctori")
const db = require("../config/keys").mongoURL

app.use(bodyParser.json())

app.use(cors())
mongoose.connect(db, { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => { console.log("database connected succesfully") })
    .catch(err => {
        console.log("Unable to connect with the database")
    });

app.listen(3000, () => console.log("Server is running"));

app.use("/doctori", doctoriRouter)