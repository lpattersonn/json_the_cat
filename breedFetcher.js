const request = require('request');
const newRequest = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${newRequest}`, (error, respones, body) => {
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('The breed is not found.');
  } else if (data['message'] === "404 - please consult the documentation for correct url to call. https://docs.thecatapi.com/") {
    console.log('There was an error: 404 - please consult the documentation for correct url to call. https://docs.thecatapi.com/');
  } else {
  //console.log('body:', body);
  //console.log("This is a:",typeof data);
    console.log(data[0]['description']);
  }
});
