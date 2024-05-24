const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ManufacturerSchema = new Schema ({
  name: {type: String, required: true, maxLength: 30},
});

ManufacturerSchema.virtual("url").get(function () {
  return `/manufacturer/${this.id}`;
});

module.exports = mongoose.model("Manufacturer", ManufacturerSchema);