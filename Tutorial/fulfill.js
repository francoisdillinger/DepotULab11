var promise = new Promise(function (fulfill, reject) {
      setTimeout( function(){
    fulfill('FULFILLED!');
     }, 300)
    }).then(function(fulfill){
        console.log(promise);
    });
    
    // Your solution here