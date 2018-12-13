const yargs = require('yargs');
const axios = require('axios');


const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDfsMnrBCab8e2WnUS8Dip3Vbt7-DnEp-o`;

axios.get(geocodeURL).then((response) => {
  if(response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address.')
  }

  let lat = response.data.results[0].geometry.location.lat;
  let lng = response.data.results[0].geometry.location.lng;
  let weatherURL = `https://api.darksky.net/forecast/e79b022885f7770c971c38a56eba6e08/${lat},${lng}`;

  let location = response.data.results[0].formatted_address;
  console.log(location);
  return axios.get(weatherURL);
}).then((response) => {
  let temperature = response.data.currently.temperature;
  let apparentTemp = response.data.currently.apparentTemperature;
  console.log(`The temperature is currently ${temperature}°F and it feels like ${apparentTemp}°F.`);
}).catch((e) => {
  if(e.code === 'ENOTFOUND') {
    console.log('Unable to connect to server.');
  } else {
    console.log(e.message);
  }
});
