var express = require('express');
var router  = express.Router();

// update a product
router.post('/get_smallest_second_smallest', function(req, res) {
    try {

    var arry = req.body.arr;
    var result = hello(arry);

    res.json({
        'status': result
    });
  
    } catch(e) {            
      res.status(500);
      throw Error('invalid JSON');
    } 
  });

  hello = (val) => {
     if(Array.isArray(val)){
      var i=0;
      var first=second=Number.MAX_SAFE_INTEGER;
      while(val[i]){
          if(val[i]<first){
          second = first;first=val[i]
      }

      if(val[i]<second && val[i]!=first){
          second=val[i]
      }
        i++;
      }
      if(second==Number.MAX_SAFE_INTEGER){
        return 'There is no second smallest element'
      }
      return {'smallest':first,'second_smallest':second}
     }else{
       return 'wrong input';
     }
  };

  router.post('/find_majority_element_in_array',function(request,response){
    console.log(request.params);
    try{
      response.json({
        'status':request.params.data
      });
    }catch(e) {            
      res.status(500);
      throw Error('invalid JSON');
    }
  });



  module.exports = router;