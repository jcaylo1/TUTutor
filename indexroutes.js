//Contains all controllers 

var express = require('express');
var router = express.Router();
var app = express();
var bodyparse = require('body-parser');
var j = bodyparse.json();
var urlencodedParser = bodyparse.urlencoded({extended: true});
app.use(bodyparse.json());
var $ = require('jquery');

//mongoose schema
const pupil = require('./pupils');
const tutor = require('./tutors');
//importing the controller to implement http requests
//var pupil_controller = require('./pupils');

router.get('/',urlencodedParser,j,function (req, res){
    res.status(200).json({
        message: 'handling pupil get'
    });
    });

router.post('/', urlencodedParser,j,function (req, res){
    var pupili = new pupil (
        {
         pfname: req.body.pupilFirst,
         plname: req.body.pupilLast,
         pemail: req.body.pupilEmail,
         ppassword: req.body.pupilpassword,
         pvpassword: req.body.verifypupilpassword,
         pmajor: req.body.pupilMajor,
         plevel: req.body.academicYear,
        });
        pupili.save(function (err, pupil){
            if (err) return console.error(err);
             res.status(201);
          res.redirect('http://www.google.com'); 
        });    
    });

router.get('/', urlencodedParser,j,function(req, res){
    res.status(200);
});

router.post('/', urlencodedParser,j,function (req, res) {
    var tutori = new tutor ({
        tfname: req.body.tutorFirst,
        tlname: req.body.tutorLast,
        temil: req.body.tutorEmail,
        tpassword: req.body.tutorpasword, 
        tvpassword: req.body.verifytutorpassword,
        tmajor: req.body.tutorMajor,
        tlevel: req.body.academicYear,
        tcourse: req.body.tutorCourse,
        trate: req.body.tutorRate,
    });
    tutori.save(function (err){
        if (err) return console.error(err);
        res.status(201);
        res.redirect('https://towsonu-tutor.herokuapp.com/homepage.html');    
    });
});

module.exports = router;

