//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+'/date.js');


const port = 3000;
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));

let items = ["buy Food", "Cook Food", "Eat Food"];
let workList = [];

app.get('/', (req, res) => {
    let day = date.getDate();

    res.render('list', {
        listTitle: day,
        newListItem: items
    });

});

app.post('/', (req, res) => {
    let item = req.body.newItem;
    if (req.body.list === "Work") {
        workList.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }
});

app.get('/work', (req, res) => {
    res.render('list', {
        listTitle: "Work List",
        newListItem: workList
    });
});

app.get('/about', (req,res)=>{
    res.render('about');
});

app.listen(port, () => {
    console.log('Server running in port ' + port);
});