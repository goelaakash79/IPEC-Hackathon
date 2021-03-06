const mongoose = require('mongoose');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
connectionString = 'mongodb://user:pass@ds249942.mlab.com:49942/ipec'
// connectionString = 'mongodb://localhost/ipechack';
mongoose.connect(connectionString, { useNewUrlParser: true })
    .then(function () {
        console.log("MongoDB Connected");
    })
    .catch(function (err) {
        console.log(err);
    });
