var express = require('express');
var router = express.Router();
var dotenv = require('dotenv');
dotenv.config();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Juan' });
});

router.get('/get', async(req, res)=> {
    let collection = await db.collection("posts");
    let results = await collection.find({}).limit(50).toArray();
    res.send(results).status
  });

router.post('/:id', async(req, res) =>{
  let collection = await db.collection("posts");
  let query = {_id:ObjectId(req.params.id)};
  let result = await collection.findOne(query);
  if(!result) res.send("Not Found").status(404);
  else res.send(result).status(200);
})  

router.put('/user', (req, res) =>{
  res.send('Get a Put request at /user');
});

router.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})


module.exports = router;
