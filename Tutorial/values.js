function attachTitle(fulfill) {
    return 'DR. ' + fulfill;
};
new Promise(function (resolve) {
    resolve('MANHATTAN');
}).then(attachTitle).then(console.log);