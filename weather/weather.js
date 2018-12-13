const request = require('request');


let getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/e79b022885f7770c971c38a56eba6e08/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if(error) {
      callback('Unable to connect to forcast.io server');
    } else if(body.code === 400) {
      callback(body.error);
    } else if(response.statusCode === 403) {
      callback(response.statusMessage);
    } else if(response.statusCode === 200) {
      callback(undefined, {
        currentTemp: body.currently.temperature,
        apparentTemp: body.currently.apparentTemperature
      });
    }
  });
}

module.exports = {
  getWeather
}
