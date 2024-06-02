const Disc = require("../models/disc");
const Manufacturer = require("../models/manufacturer");
const Disctype = require("../models/disctype");
const Discinstance = require("../models/discinstance")
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  const [
    numDiscs,
    numDiscinstances,
    numManufacturers,
    numDisctypes,
  ] = await Promise.all([
    Disc.countDocuments({}).exec(),
    Discinstance.countDocuments({}).exec(),
    Manufacturer.countDocuments({}).exec(),
    Disctype.countDocuments({}).exec(),
  
  ]);
  res.render("index", {
    title: "Disc Inventory",
    disc_count: numDiscs,
    disc_instance_count: numDiscinstances,
    manufacturer_count: numManufacturers,
    disctype_count: numDisctypes,
  })
})

// Display list of all discs.
exports.disc_list = asyncHandler(async (req, res, next) => {
  const allDiscs = await Disc.find().populate("manufacturer").exec();

  res.render("disc_list", {title: "Disc List", disc_list: allDiscs});
});

// Display detail page for a specific disc.
exports.disc_detail = asyncHandler(async (req, res, next) => {
  const [disc, discinstances] = await Promise.all([
    Disc.findById(req.params.id).populate("manufacturer").populate("disctype").exec(),
    Discinstance.find({disc: req.params.id}).populate("disc").exec(),
  ]);

  if(disc === null){
    //No results.
    const err = new Error("Disc not found");
    err.status = 404;
    return next(err);
  }

  res.render("disc_detail", {
    title: disc.name,
    disc: disc,
    disc_instances: discinstances,
  })
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