import express from "express";
import mongoose from "mongoose";

const app = express()


app.use(express.static('./src'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

const port = 5000;
mongoose.connect('mongodb://mongo:27017/mydb')
    .then(() => {
        console.log('Connected to Database');
    }).catch(err => {
        console.log('Database connection error ', err);
    })

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})