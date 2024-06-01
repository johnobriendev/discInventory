const Disctype = require("../models/disctype");
const asyncHandler = require("express-async-handler");
// Display list of all disctypes.
exports.disctype_list = asyncHandler(async (req, res, next) => {
  const allDisctypes = await Disctype.find().exec();

  res.render("disctype_list", {
    title: "Discs by Category",
    disctype_list: allDisctypes,
  });
});

// Display detail page for a specific disctype.
exports.disctype_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
});
//create get
exports.disctype_create_get = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
// create post
exports.disctype_create_post = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//delete get
exports.disctype_delete_get = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//delete post
exports.disctype_delete_post = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//update get
exports.disctype_update_get = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//update post
exports.disctype_update_post = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});