var mongoose = require("mongoose");

mongoose.connect("mongodb+srv://amanullah:amanullah@cluster0.wr149ac.mongodb.net/Blog-App");

const blogSchema = new mongoose.Schema({
  title: String,
  desc: String,
  image: String,
  content: String,
  date: {
    type: Date,
    default: Date.now,
  }
});

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel;