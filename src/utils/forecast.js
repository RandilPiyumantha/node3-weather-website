const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url =
		'http://api.openweathermap.org/data/2.5/weather?lat=' +
		encodeURIComponent(latitude) +
		'&lon=' +
		encodeURIComponent(longitude) +
		'&units=metric&appid=9a05d7747df6b18aba776f0b11b831d8';

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to weather services!', undefined);
		} else if (body.message) {
			callback('Unable find location!', undefined);
		} else {
			callback(undefined, 'It is ' + body.main.temp + ' degrees with ' + body.weather[0].description);
		}
	});
};

module.exports = forecast;
