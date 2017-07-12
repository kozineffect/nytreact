// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var nytAPI = "b37946acbc2d4abfa25d4bc015dbc617";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(query) {

    console.log(query);

    // Figure out the geolocation
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&sort=newest&q=" + query;
    console.log(queryURL);
    return axios.get(queryURL).then(function(response) {
      console.log(response.data.response.docs);
      // If get get a result, return that result's formatted address property
      if (response.data.response.docs) {
        return response.data.response.docs;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getSaved: function() {
    return axios.get("/api/saved");
  },

  // This function posts new searches to our database.
  postSaved: function(location) {
    return axios.post("/api/saved", { location: location });
  }
};

// We export the API helper
module.exports = helper;
