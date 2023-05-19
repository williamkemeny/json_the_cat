const request = require("request");
const commandLine = process.argv.slice(2);

const fetchBreedDescription = function (breedName, callback) {
  request(
    "https://api.thecatapi.com/v1/breeds/search?q=" + breedName,
    (error, response, body) => {
      const data = JSON.parse(body);
      if (error) {
        callback(error, null); // Print the error if one occurred
        return null;
      }
      if (response.statusCode !== 200) {
        callback("statusCode:" + response.statusCode, null); // Print the response status code if a response was received
        return;
      } else {
        if (data.lenghth === 0) {
          console.log(`Breed ${breedName} not found.`);
        }
      }
      callback(null, data[0].description);
    }
  );
};

module.exports = { fetchBreedDescription };
