const request = require("request");
const commandLine = process.argv.slice(2);

const fetchBreedDescription = function (breedName, callback) {
  request(
    "https://api.thecatapi.com/v1/breeds/search?q=" + breedName,
    (error, response, body) => {
      const data = JSON.parse(body);
      if (error) {
        callback(error, null); // Print the error if one occurred
        return;
      }
      if (response.statusCode !== 200) {
        callback("statusCode:" + response.statusCode, null); // Print the response status code if a response was received
        return;
      }

      if (data.length === 0 || data[0] === undefined) {
        callback(null, `Breed ${breedName} not found.`);
      } else {
        callback(null, data[0].description.trim()); // trim here instead of in tests
      }
    }
  );
};

module.exports = { fetchBreedDescription };
