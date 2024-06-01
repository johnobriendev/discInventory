const Discinstance = require("../models/discinstance");
const asyncHandler = require("express-async-handler");
// Display list of all discinstances.
exports.discinstance_list = asyncHandler(async (req, res, next) => {
  const allDiscInstances = await Discinstance.find().populate('disc').exec();

  res.render("discinstance_list", {
    title: "Discs in Stock",
    discinstance_list: allDiscInstances,
  });
});

// Display detail page for a specific discinstance.
exports.discinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
});
//create get
exports.discinstance_create_get = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
// create post
exports.discinstance_create_post = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//delete get
exports.discinstance_delete_get = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//delete post
exports.discinstance_delete_post = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//update get
exports.discinstance_update_get = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//update post
exports.discinstance_update_post = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});