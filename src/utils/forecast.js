const request = require("request");




const forecast = (latitude, longitude, callback) => {
  const url =
  "https://api.darksky.net/forecast/33e35c6c697abb35e82b242fae88e2f8/" + latitude + "," + longitude;
    request({url, json: true }, (error, { body }) => {
        if(error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (body.error) {
            callback("Unable to find location. Try searching again... ", undefined)
        } else {
            callback(undefined, body.daily.data[0].summary +
                        " It is currently " +
                        body.currently.temperature +
                        " degrees out. There is a " +
                        body.currently.precipProbability +
                        "% chance of rain.")
        }
    })

};


module.exports = forecast