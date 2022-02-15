var express = require('express');
const dotenv = require('dotenv');

//Load env variable
dotenv.config({path: './config/config.env'});

const app = express();

const PORT = process.env.PORT;

app.listen(
     PORT,
     console.log(`Server running in ${process.env.NODE_ENV} mode and at port ${PORT}`)
);