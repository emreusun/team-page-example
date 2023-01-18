var express = require('express');
var router = express.Router();
// const team = require('../data/');
let team = {
  justin: {
    name: 'Justin',
    role: 'Team Lead',
    avatar:'justin.jpg',
  },
  joe: {
    name: 'Joe',
    role: 'Front End',
  },
  emre: {
    name: 'Emre',
    role: 'Back End',
  },
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'Express',
     content:'express is easy!' 
    });
});
// router team page connection to index.js
router.get('/team', function(req, res) {
  res.render('mainteampage')
})

router.get('/team/:member', function(req, res) {
  console.log(req.params.member);

  res.render('team', { person: team[req.params.member]});
})
module.exports = router;
