const Manufacturer = require("..models/manufacturer");
const asyncHandler = require("express-async-handler");
// Display list of all Manufacturers.
exports.manufacturer_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Manufacturer list");
});

// Display detail page for a specific Manufacturer.
exports.manufacturer_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
});
//create get
exports.manufacturer_create_get.asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
// create post
exports.manufacturer_create_post.asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//delete get
exports.manufacturer_delete_get.asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//delete post
exports.manufacturer_delete_post.asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//update get
exports.manufacturer_update_get.asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//update post
exports.manufacturer_update_post.asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});