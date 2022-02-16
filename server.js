var express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');

//Load env variable
dotenv.config({path: './config/config.env'});
//Connect to Database
connectDB();
//Route files
const bootcamp = require('./routes/bootcamp');
const { connect } = require('mongoose');

const app = express();

//Body Parser
app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Mounting Router
app.use('/api/v1/bootcamps', bootcamp);

const PORT = process.env.PORT;

const server = app.listen(
     PORT,
     console.log(`Server running in ${process.env.NODE_ENV} mode and at port ${PORT}`.yellow.bold)
);

//Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    //close server and exit process
    server.close(() => process.exit(1));
});