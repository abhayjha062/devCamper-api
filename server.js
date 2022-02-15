var express = require('express');
const dotenv = require('dotenv');

//Route files
const bootcamp = require('./routes/bootcamp');
//Load env variable
dotenv.config({path: './config/config.env'});

const app = express();
//Mounting Router
app.use('/api/v1/bootcamps', bootcamp);

const PORT = process.env.PORT;

app.listen(
     PORT,
     console.log(`Server running in ${process.env.NODE_ENV} mode and at port ${PORT}`)
);