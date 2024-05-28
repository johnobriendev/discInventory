const Discinstance = require("..models/discinstance");
const asyncHandler = require("express-async-handler");
// Display list of all discintances.
exports.discintance_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: discintance list");
});

// Display detail page for a specific discintance.
exports.discintance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
});
//create get
exports.discintance_create_get.asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
// create post
exports.discintance_create_post.asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//delete get
exports.discintance_delete_get.asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//delete post
exports.discintance_delete_post.asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//update get
exports.discintance_update_get.asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//update post
exports.discintance_update_post.asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});