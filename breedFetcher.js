const request = require('request');
const args = process.argv.slice(2);
const breed = args.toString();


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.length === 0) {
    return console.log('Breed not found');
  }
  if (data[0] === undefined) {
    return console.log("error");

  } else {
    console.log(data[0].description);
    console.log(typeof data);
  }
});