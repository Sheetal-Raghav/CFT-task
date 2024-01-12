const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const PORT = 3000;

//database
const connect =require("./database/db")
connect()

//routes
const categoryRouter = require('./routes/categoryRoutes'); 
const userRoutes=require("./routes/userRoutes")
const serviceRouter = require('./routes/serviceRoutes');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

//routes
app.use("/auth",userRoutes) //login router
app.use('/category', categoryRouter);  //category router
app.use("/service",serviceRouter) //service router


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
