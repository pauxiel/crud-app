const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: String,
  email: String,
  country: String,
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
