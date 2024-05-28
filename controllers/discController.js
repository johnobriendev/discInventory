const Disc = require("../models/disc");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("Home Page : not implemented yet")
})

// Display list of all discs.
exports.disc_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: disc list");
});

// Display detail page for a specific disc.
exports.disc_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
});

//create get
exports.disc_create_get = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});

// create post
exports.disc_create_post = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});

//delete get
exports.disc_delete_get = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});

//delete post
exports.disc_delete_post = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});

//update get
exports.disc_update_get = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});

//update post
exports.disc_update_post = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});