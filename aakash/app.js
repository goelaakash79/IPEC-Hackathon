const express =require('express');
const path = require('path');
const bodyParser = require('body-parser');


// DB Config
require('./config/dbconnection');

const app = express();
const booktique = require('./routes/booktique');

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/booktique', booktique);

app.get('/', function(req, res){
  res.render('home');
});

app.listen(process.env.PORT || 3000, process.env.IP, function() {
  console.log("Server is running");
});
