var bodyParser=require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds135876.mlab.com:35876/registration');

//Create a schema
var registrationSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    school:String,
    events:Array

});

var registration= mongoose.model('registration', registrationSchema);

/*var Userone= registration({
  firstName: 'Prajval',
  lastName: 'a',
  school: 'c',
  events: ['Sandesha','Drawing']

}).save(function(err){
    if(err) throw err;

    console.log('item saved');

});*/


module.exports=function(app){

      app.get('/forma',function(req,res)
      {


        res.render('forma');

      });

      app.post('/forma', urlencodedParser,function(req,res){

        console.log(req.body);
        res.render('registrationSuccess',{data:req.body});
        var newregistration= registration(req.body).save(function(err,data){
          if (err) throw err;

        });

      });
      app.get('/participants', urlencodedParser, function(req,res){
        registration.find({},function(err,data){//to get all the objects
          if(err) throw err;
          res.render('participants', {data:data});

        });

        });




}
