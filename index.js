const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./db/conn");
dotenv.config({path: './.env'}); 

app.use(cors());
app.use(express.json());
app.use("/api", require("./router/auth"))

if (process.env.NODE_ENV=== 'production') {
    app.use(express.static('client/build'));
    app.get('*',(req,res) => {
        res.sendFile(path.join(__dirname , 'client' , 'build' , 'index.html'))
    })
}

dbConnection().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is working on ${PORT}`);
    });
})
