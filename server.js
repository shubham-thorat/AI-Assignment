import express from "express";
import mongoose from "mongoose";
import User from "./db/userSchema.js";


const app = express()
app.use(express.static('./views'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.get('/user', (req, res) => {
    User.find()
        .then(docs => { res.status(200).json(docs) })
        .catch(err => { res.status(500).json({ message: err.message }) })
})
app.post('/user/login', (req, res) => {
    const { username, password } = req.body
    const new_user = new User({
        username: username,
        password: password
    })

    new_user.save()
        .then(docs => { res.status(200).json(docs) })
        .catch(err => { res.json({ message: err.message }) })
})

const port = 5000;
mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => {
        console.log('Connected to Database');
    }).catch(err => {
        console.log('Database connection error ', err.message);
    })

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})