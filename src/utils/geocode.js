const request = require('request') //makes http request a whole lot easier :)

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY2hyaXNjYW1lcm9uMSIsImEiOiJjanl0ZzB1NW8wM3JiM21uazl0bThhM2p4In0.LBrFbi2ib3qxu5dhUkKFpQ&limit=1'

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)

        } else if (body.features.length === 0) {
            callback('Unable to find location, Try anopther search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode