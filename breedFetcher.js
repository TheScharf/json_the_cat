const request = require('request');
//const breedDescription = fetchBreedDescription('siberian');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName.toString()}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback('Breed not found', null);
      return;
    }
    if (data[0] === undefined) {
      callback("error", null);
      return;
    } else {
      callback(null, data[0].description);
      //console.log(typeof data);
      return;
    }
  });
};

module.exports = { fetchBreedDescription };