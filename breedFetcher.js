const breedFetcher = (inputURL) => {
  const request = require('request');
  request(inputURL, (error, response, body) => {
    try {
      const data = JSON.parse(body);
      console.log(data[0].description);
    }
    catch {
      console.log("Error ocurred:" + error);
    }
  })
};

const urlConvert = (breed) => {
  let urlBreed = breed.toLowerCase().slice(2);
  return (`https://api.thecatapi.com/v1/breeds/search?q=${urlBreed}`)
}

breedFetcher(urlConvert(process.argv[2]));