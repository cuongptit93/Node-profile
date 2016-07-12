var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('Profile', ['profile'], ['user']);
var bodyParser = require('body-parser');
var passwordHash = require('password-hash');

app.use(express.static(__dirname + "/public_html"));
app.use(bodyParser.json());

/*//////////////////////////////////// */
app.get('/user', function (req, res){
	console.log("Ok Ok");
	db.user.find(function(err, doc){
        console.log(doc);
        res.json(doc);
    });
});
/*Them 1 User*/
app.post('/user', function (req, res) {
	var hashedPassword = passwordHash.generate(req.body.password);
	console.log(hashedPassword); 
    db.user.insert({user: req.body.name, password: hashedPassword});
    console.log(req.body);
});
/*////////////////////*/
app.listen(9090, function () {
  console.log('APP Listen port 9090');
});