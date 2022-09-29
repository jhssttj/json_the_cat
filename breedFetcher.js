const fetchBreedDescription = function(breedName, callback) {
  const request = require('request');
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName.toLowerCase().slice(2)}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error,null);
      return;
    }
    if (data.length === 0) {
      callback("Error: Cat breed doesnt exist", null);
      return;
    }
    callback(null, data[0].description);
    return;
  });
};


//Test Case
//fetchBreedDescription(process.argv[2]);

module.exports = {
  fetchBreedDescription
};