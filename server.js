const express = require("express");
require("dotenv").config();
const Connect = require("./config/ConnectDB");
Connect();
const router=require('./routes/route')
const bodyParser=require('body-parser');
const app=express()
app.use(bodyParser.json());
app.use('/api/users',router);

const port=4000;
app.listen(port, () => {
    console.log(
      `Listening to requests on http://localhost:${port}`
    );
  });