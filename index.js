const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
//const MongoClient = require('mongobd').MongoClient;
const ejs = require('ejs');

app.use(express.static('public'));


require('dotenv').config(); 



app.use(express.static('public'))



	router.get('/',function(req,res){
	  	res.sendFile(path.join(__dirname+'/public/html/index.html'));
 	 	//__dirname : verwijst naar project folder.

	});

	router.get('/login',function(req,res){
			res.sendFile(path.join(__dirname+'/public/html/login.html'));
		//__dirname : verwijst naar project folder.
	});

	router.get('/about',function(req,res){
  		res.sendFile(path.join(__dirname+'/public/html/about.html'));
	});

	router.get('/contact',function(req,res){
  		res.sendFile(path.join(__dirname+'/public/html/contact.html'));
	});

	//pagina dat niet bestaat
	router.get('*',function(req,res){
 		res.sendFile(path.join(__dirname+'/public/html/404.html'));
	});






//add the router
// app.use('/', router);
app.listen(3000, () => {
  console.log('Server draait op poort 3000');
});



/*****MONGODB*****/

/*let db;
const uri = 'mongodb+srv://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@cluster0-vv5pd.azure.mongodb.net/test?retryWrites=true&w=majority';

MongoClient.connect(uri, function (err, client) {
  if (err) {
    throw err;
  }
    db = client.db(process.env.DB_NAME);
    db.collection('mapnaam').insertOne({
      title: 'hello World'
    });
});
*/
/******EJS********/

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.render('index.ejs'), {
    title: 'hello world'
  }
})
