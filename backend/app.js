const express = require('express'); // to build backend quickly
const app = express();// licance of express
const cors = require('cors'); // to cross orginal policies
const PORT = 8745
require("./DB")

app.use(cors()); //


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
}
)