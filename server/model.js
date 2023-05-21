const mongoose = require("mongoose");

const Document = mongoose.Schema({
  _id: String,
  data: Object,
});

module.exports = mongoose.model("Document", Document);



