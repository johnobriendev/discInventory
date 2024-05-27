const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscinstanceSchema = new Schema({
  plastic: {type: String, required: true, enum: ["DX", "Pro", "Champion", "Star", "GStar", "Halo Star"]},
  weight: {type: Number, required: true, minLength: 130, maxLength: 180},
  color: {type: String, required: true,},
})

DiscinstanceSchema.virtual("url").get(function () {
  return `/discinstance/$${this._id}`;
});

module.exports = mongoose.model("Discinstance", DiscinstanceSchema);