const Manufacturer = require("../models/manufacturer");
const Disc = require("../models/disc");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");


// Display list of all Manufacturers.
exports.manufacturer_list = asyncHandler(async (req, res, next) => {
  const allManufacturers = await Manufacturer.find().exec();

  res.render("manufacturer_list", {
    title: "Disc Manufacturers",
    manufacturer_list: allManufacturers,
  });
});

// Display detail page for a specific Manufacturer.
exports.manufacturer_detail = asyncHandler(async (req, res, next) => {
  const [manufacturer, discsByManufacturer] = await Promise.all([
    Manufacturer.findById(req.params.id).exec(),
    Disc.find({manufacturer: req.params.id}).exec(),
  ]);

  if (manufacturer === null) {
    //No results.
    const err = new Error("Manufacturer not found");
    err.status = 404;
    return next(err);
  }

  res.render("manufacturer_detail", {
    title: `Discs by ${manufacturer.name}`,
    manufacturer: manufacturer,
    manufacturer_discs: discsByManufacturer,
  })
});
//create get
exports.manufacturer_create_get = asyncHandler(async(req, res, next) =>{
  res.render("manufacturer_form", {title: "Add a Manufacturer"});
});
// create post
exports.manufacturer_create_post = [
  body("name").trim().isLength({min:1}).escape().withMessage("Specify a disc manufacturer"),

  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create Author object with escaped and trimmed data
    const manufacturer = new Manufacturer({
      name: req.body.name
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
      res.render("manufacturer_form", {
        title: "Create Manufacturer",
        manufacturer: manufacturer,
        errors: errors.array(),
      });
      return;
    } else {
      // Data from form is valid.

      // Save author.
      await manufacturer.save();
      // Redirect to new author record.
      res.redirect(manufacturer.url);
    }
  }),
]
 
//delete get
exports.manufacturer_delete_get = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//delete post
exports.manufacturer_delete_post = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//update get
exports.manufacturer_update_get = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});
//update post
exports.manufacturer_update_post = asyncHandler(async(req, res, next) =>{
  res.send("not implemented");
});