// we will create a home page with "/user" route


const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let users = [
    { id: 1, name: 'prakash', age: 25, city: 'delhi', mobile: '1234567890' },
    { id: 2, name: 'harsh', age: 30, city: 'noida', mobile: '9876543210' }
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Page Route
app.get('/', (req, res) => {
    res.render('user', { data: users });
});

// Add User Page Route
app.get('/add', (req, res) => {
    res.render('add');
});

// Update User Page Route
app.get('/update', (req, res) => {
    res.render('update');
});


app.post('/add', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age,
        city: req.body.city,
        mobile: req.body.mobile
    };

    users.push(newUser);
    res.redirect('/');
});


app.get('/update/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userToUpdate = users.find(user => user.id === userId);

    if (!userToUpdate) {
        res.status(404).send('User not found');
        return;
    }

    res.render('update', { user: userToUpdate });
});



app.post('/update/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userToUpdate = users.find(user => user.id === userId);

    if (!userToUpdate) {
        res.status(404).send('User not found');
        return;
    }

    userToUpdate.name = req.body.name;
    userToUpdate.age = req.body.age;
    userToUpdate.city = req.body.city;
    userToUpdate.mobile = req.body.mobile;

    res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        res.status(404).send('User not found');
        return;
    }

    users.splice(userIndex);

    res.redirect('/');
});



app.listen(3000, ()=>{
    console.log('server is running in port number 3000')
});
