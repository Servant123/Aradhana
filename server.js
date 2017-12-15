var express=require('express');
var app= express();

var registrationController=require('./Controller/registrationController');
//set up a template engine
app.set('view engine','ejs');

registrationController(app);

app.listen(3000);
