const express = require('express');
const router = express.Router();
let Profile = require("../models/Profile");

router.get('/login', function(req, res){
  res.render('login');
});

router.post("/login", function(req, res){
    Profile.findOne({user_id: req.body.username, user_password: req.body.password}, function(err, profile){
      if(!err){
        console.log(profile)
        if(profile == null)
          res.json({msg: 'no such user'})
        else {
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

// router.get('/xyz', function(req, res){
//   User.create([], function(err, profile){
//     if(!err)
//       res.send({msg:"ok"});
//     console.log(err);
//   });
// });

module.exports = router;
