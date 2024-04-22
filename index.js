const express = require('express')
const app = express();
const PORT = 8000
const userRoutes = require('./routes/user')

//middlewares
app.use(express.json())

//Routes
app.use('/user' , userRoutes);



app.listen(PORT , ()=>{
    console.log(`SERVER STARTED : http://localhost:${PORT}/`)
})