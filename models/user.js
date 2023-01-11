var mongoose = require("mongoose");
var Schema = mongoose.Schema;

(userSchema = new Schema({
  unique_id: Number,
  email: { type: String, unique: true },
  username: String,
  password: String,
  passwordConf: String,
})),
  (User = mongoose.model("User", userSchema));

module.exports = User;
