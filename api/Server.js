const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.use(express.json());
const port = process.env.port || 8078;

app.use(cors());
app.use(bodyparser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // useNewUrlParser: true,
    // UseUnifiedTopology: true,s

});

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("mongodb connection success!");
});

const ticketRouter = require("./routes/tickets.js");

app.use("/ticket",ticketRouter);

app.listen(port, ()=>{
    console.log(`server is up and running on port number: ${port}`);
    
});




