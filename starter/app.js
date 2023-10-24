
const express = require('express');
const app = express();
const tasks = require('./routes/task');
const connectDB=require('./db/connect');
const notfound = require('./middleware/not-found');
const errorHandlerMiddleware = require('../starter/middleware/error-handle')
require('dotenv').config();
// middle ware
app.use(express.static('./public'))
app.use(express.json());

// routes


app.use('/api/v1/tasks',tasks);
app.use(notfound)
app.use(errorHandlerMiddleware) 

const port =  5000;

const start = async ()=>{
 
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`server is listen ${port}`));
    } catch (error) {
        console.log(error);
    }
}
start()
