var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SearchSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },
  url: {
      type: String
  }
});

var Search = mongoose.model("Search", SearchSchema);
module.exports = Search;