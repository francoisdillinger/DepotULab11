//  first();
 
//  var secondPromise = first().then(function(secret){
//      return second(secret);
//  });
 
//  secondPromise.then(console.log);

first().then(second).then(console.log);