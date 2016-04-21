var promise = new Promise(function(fulfill, reject) {
    fulfill('I\' here  yo!');
    reject(new Error('I\'m not here!'));
})
 promise.catch(function(err) {
     console.error('This isn\'t working');
     console.error(err.message);
 })

var promise = Promise.resolve('I\'m here yo!');

var promise = new Promise(function(fulfill, reject) {
    reject(new Error('I\'m not here!'));
})

var promise = Promise.reject(new Error('I\'m not here'));