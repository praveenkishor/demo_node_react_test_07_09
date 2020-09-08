var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pass@123',
  database: 'mydb'
})
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL!");

});



// create a new product
router.post('/create', function(req, res, next) {  
  try {
    var sql = 'insert into coingecko(name,img,price,created) values(?,?,?,?)'
    var values = [
        req.body.hasOwnProperty('name') ? req.body.name : '',
        req.body.hasOwnProperty('image') ? req.body.quantity : 0,
        req.body.hasOwnProperty('price') ? req.body.price : 0,
        new Date()
    ]

    con.query(sql, values, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        
        res.json({
            'status': 'created'
        });
        
    });
  } catch(e) {            
    res.status(500);
    throw Error('invalid JSON');
  }
});
// update a product
router.post('/update', function(req, res, next) {
  try {
    var sql = 'update coingecko set name=?,image=?,price=? where id=?'
    var values = [
        req.body.hasOwnProperty('name') ? req.body.name : '',
        req.body.hasOwnProperty('image') ? req.body.quantity : 0,
        req.body.hasOwnProperty('price') ? req.body.price : 0,
        req.body.hasOwnProperty('id') ? req.body.id : 0
    ]

    con.query(sql, values, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        
        res.json({
            'status': 'updated'
        });
        
    });
  } catch(e) {            
    res.status(500);
    throw Error('invalid JSON');
  }
});
// delete product /product/3
router.get('/delete/:id', function(req, res, next) {
  try {
    var sql = 'delete from coingecko where id=?'
    var values = [              
      req.params.id
    ]
    con.query(sql, values, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        
        res.json({
            'status': 'deleted'
        });
        
    });
  } catch(e) {            
    res.status(500);
    throw Error('invalid JSON');
  }
});

router.get('/', function(req, res, next) {
  console.log('hiiiiiiiiiiiiiii')
  try {
    var sql = 'select * from coingecko'
    console.log(sql);
    
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        
        res.json(result);
        
    });
  } catch(e) {            
    res.status(500);
    throw Error('invalid JSON');
  }
});
// get detail product
router.get('/:id', function(req, res, next) {
  try {
    var sql = 'select * from coingecko where id=?'

    var values = [              
      req.params.id
    ]
    
    con.query(sql, values,function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        
        res.json(result);
        
    });
  } catch(e) {            
    res.status(500);
    throw Error('invalid JSON');
  }
});

module.exports = router;
