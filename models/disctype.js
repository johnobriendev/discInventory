const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DisctypeSchema = new Schema({
  category: {type: String, required: true, enum: ["Distance", "Fairway", "Midrange", "Putter"]}
});

DisctypeSchema.virtual("url").get(function () {
  return `/disctype/${this._id}`
})

module.exports = mongoose.model("Disctype", DisctypeSchema);