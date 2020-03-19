require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();

// Body Parser Middleware
app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
app.use(cors());
app.use('/api', routes);

module.exports = app;
