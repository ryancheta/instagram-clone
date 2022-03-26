const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  location: String,
  avatar: String,
  comment: Array,
  likes: String,
  time_ago: String,
})