var express = require('express');
var router = express.Router();
import dotenv from 'dotenv';
dotenv.config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Juan' });
});

router.get('/',(req, res)=> {
  res.send('Hello World');
  });

router.post('/', (req, res) =>{
  res.send('Get a Post request');
})  

router.put('/user', (req, res) =>{
  res.send('Get a Put request at /user');
});

router.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
});


module.exports = router;
