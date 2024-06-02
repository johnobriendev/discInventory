const Disctype = require("../models/disctype");
const Disc = require("../models/disc");
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
  console.log('Requested ID:', req.params.id);
  
  const [disctype, discsInType] = await Promise.all([
    Disctype.findById(req.params.id).exec(),
    Disc.find({ disctype: req.params.id }).populate("manufacturer").exec(),
  ]);
  if (disctype === null) {
    // No results.
    const err = new Error("Disctype not found");
    err.status = 404;
    return next(err);
  }

  res.render("disctype_detail", {
    title: "Disc Detail",
    disctype: disctype,
    disctype_discs: discsInType,
  });

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