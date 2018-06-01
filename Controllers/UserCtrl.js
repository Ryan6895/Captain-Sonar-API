var app = require('.././server');
var db = require('./../server');
var db = db;
var router = express.Router();
module.exports = {
    test: router.get('/api/test', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });   
    }),
    user: router.get('/api/user', function(req,res) {
        res.json({user: 'Ryan Clark'})
    }),
    login: router.post('/api/users/login', function(req,res) {
        console.log(req);
        //body: { user: { email: 'ryaf', password: 'dsaf' } }
        res.json({user:'Ryan Clark'})
    }),
    login: function(req,res) {
        console.log(db);
        console.log(req.body);
        
        db.login([req.body.user.email, req.body.user.password], function (err, results) {
            if (err){
                console.log(err);
                return res.send(err);
            }
            res.send(results);
        })
        //body: { user: { email: 'ryaf', password: 'dsaf' } }
    }
}