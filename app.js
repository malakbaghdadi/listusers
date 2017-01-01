const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(express.static(__dirname+'/client'));

app.use(bodyParser.json());
User =require('./models/user');


mongoose.connect('mongodb://localhost/listusersapp');
var db = mongoose.connection;

app.get('/', function(req, res)  {
	res.send('Pleease use /api/users ');
});


app.get('/api/users', (req, res) => {
	User.getUsers((err, users) => {
		if(err){
			throw err;
		}
		res.json(users);
	});
});
app.get('/api/users/:_id', (req, res) => {
	User.getUserById(req.params._id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});
// add user 


app.post('/api/users', (req, res) => {
	var user = req.body;
	User.addUsers(user, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.put('/api/users/:_id', (req, res) => {
	var id = req.params._id;
	var user = req.body;
	User.updateUser(id, user, {}, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.delete('/api/users/:_id', (req, res) => {
	var id = req.params._id;
	User.removeUser(id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});




app.listen(8808);
console.log('Running on port 8808...');