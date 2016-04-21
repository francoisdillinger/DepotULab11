var promise = new Promise(function (fulfill, reject) {
      fulfill(new Error('I FIRED'));
      reject(new Error('I DID NOT FIRE'))
      });
    function onReject (error) {
      console.log(error.message);
    };
     promise.then(onReject, onReject); 