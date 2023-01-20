const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
var cors = require('cors')
const User = require('./Models/SignUpUserModel')



mongoose.connect('mongodb://localhost:27017/QuizAppAccDetails', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('Connected to database');
    }
    else {
        console.log('error');
    }
});

app.listen(3002, () => {
    console.log('on port 3002')
})

app.use(cors())

app.post('/allUsers', async (req, res) => {
    console.log('Inside post function');
    const data = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })
    const val = await data.save();
    res.json('posted')
})

app.get('/allUsers', async (req, res) => {
    console.log('Inside get function');
    User.find()
        .then(test => {
            res.send(test);
        })
})

app.get('/user/:id', async (req, res) => {
        User.findById(req.params.id)
        .then(test => {
            res.send(test);
        })
    console.log("Response with id=>>>>>", res.params)
})