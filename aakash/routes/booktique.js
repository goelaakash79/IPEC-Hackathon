const express = require('express');
const request = require("request");
const router = express.Router();
const fs = require('fs');
let Profile = require("../models/Profile");

let url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';

router.get('/login', function(req, res){
  res.render('login');
});

router.post("/login", function(req, res){
    Profile.findOne({user_id: req.body.username, user_password: req.body.password}, function(err, profile){
      if(!err){
        if(profile == null)
          res.json({msg: 'no such user'})
        else {
          request(url, function(err, response, body){
            if (!err && response.statusCode == 200) {
              var data = JSON.parse(body);
              res.render('information',{
                image: data['items'][0]['volumeInfo']['imageLinks']['thumbnail'],
                title: data['items'][0]['volumeInfo']['title'],
                desc: data['items'][0]['volumeInfo']['description'],
                pages: data['items'][0]['volumeInfo']['pageCount'],
                category: data['items'][0]['volumeInfo']['categories'],
                publisher: data['items'][0]['volumeInfo']['publisher'],
                authors: data['items'][0]['volumeInfo']['authors'],
              });
            }
          });
          res.render('index',{data:profile});
        }
      }
    });
});

router.get('/profile', function(req, res){
  Profile.find({}, function(err, profile){
    if(!err){
      res.render('index', {data: profile});
    }
  });
});

router.get('/information/:id', function(req,res){
  url += req.params.id;
  request(url, function(err, response, body){
    if (!err && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.render('information',{
        image: data['items'][0]['volumeInfo']['imageLinks']['thumbnail'],
        title: data['items'][0]['volumeInfo']['title'],
        desc: data['items'][0]['volumeInfo']['description'],
        pages: data['items'][0]['volumeInfo']['pageCount'],
        category: data['items'][0]['volumeInfo']['categories'],
        publisher: data['items'][0]['volumeInfo']['publisher'],
        authors: data['items'][0]['volumeInfo']['authors'],
      });
    }
  });
});


// router.get('/xyz', function(req, res){
//   Profile.create([], function(err, profile){
//     if(!err)
//       res.send({msg:"ok"});
//     console.log(err);
//   });
// });

module.exports = router;
