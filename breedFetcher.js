const request = require("request");
const commandLine = process.argv.slice(2);

request(
  "https://api.thecatapi.com/v1/breeds/search?q=" + commandLine[0],
  (error, response, body) => {
    const data = JSON.parse(body);
    if (data[0] !== undefined) {
      console.log(data[0].description);
    } else if (commandLine[0] !== undefined) {
      console.log(`Breed ${commandLine[0]} not found.`);
    } else {
      console.log("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    }
  }
);
