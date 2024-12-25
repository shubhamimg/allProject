const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing");
const User = require("./models/user");
const methodOverride = require('method-override')
const {wrapAsync} = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const {listingSchema} = require("./schema");
// const bcrypt = require("bcrypt");
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, "public")));

main().then(() => {
    console.log("Connection Successful");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wonderlust")
};

app.get("/",  wrapAsync ( async (req, res, next) => {
    const allListings = await Listing.find({});
   return res.render("./listings/index.ejs", { allListings });
}));

const validateListing = (req, res, next) =>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        throw new ExpressError(400, error);
    }else{
        next();
    }
};

// const validateUser = (req, res, next) =>{
//     let {error} = Schema.validate(req.body);
//     if(error){
//         throw new ExpressError(400, error);
//     }else{
//         next();
//     }
// };


app.get("/listing", wrapAsync( async (req, res, next) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
}));

app.get("/listing/:id/details", wrapAsync( async (req, res, next) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/details.ejs", { listing })
}));


app.get("/listings/new", (req, res) => {
    res.render("./listings/new.ejs")
});



// post route
app.post("/listings", validateListing, wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listing");
    // let { title, description, price, location, country, image } = req.body;
    // let newListing = new Listing({
    //     title: title,
    //     description: description,
    //     price: price,
    //     location: location,
    //     country: country,
    //     image: image
    // });
}));

// admin route
app.get("/admin", wrapAsync( async (req, res, next) => {
    let allListings = await Listing.find({});
    res.render("./admin/admin.ejs", { allListings })
}));


// edit route

app.get("/listings/:id/edit", wrapAsync( async (req, res, next) => {
    let { id } = req.params;
    let allListings = await Listing.findById(id);
    res.render("./listings/edit.ejs", { allListings });
}));

// update route
app.put("/listings/:id", wrapAsync( async (req, res, next) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect("/listing");
    // let {title: upTitle, description: upDescription, price: upPrice, location: upLocation, country: upCountry, image: upImage} = req.body;

    // let updatedListing = await Listing.findByIdAndUpdate(id,{
    //     title: upTitle,
    //     description: upDescription,
    //     price: upPrice,
    //     location: upLocation, 
    //     counrty: upCountry,
    //     image: upImage
    // },{runValidators: true, new: true});
}));


// delete route

app.delete("/listings/:id", wrapAsync( async (req, res, next) => {
    let { id } = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id).then(() => {
        console.log("Listing is deleted")
    }).catch((err) => {
        console.log(err);
    });
    res.status(200).redirect("/listing")
}));

// app.get("/testListing", async (req, res) =>{
//     let sampleListing = new Listing({
//       title: "My new Villa",
//       description: "By the beach",
//       price: 1200,
//       location: "Calagute, Goa",
//       country: "India"  
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("Sucessful testing");
// });


// user Api Start
// regiter user

app.get("/register", (req, res) => {
    res.render("./listings/auth/register.ejs")
});

app.post("/register", wrapAsync(async (req, res, next) =>{
    const userData = new User (req.body.data)
    await userData.save();
    res.redirect("/")
}));


// login user
app.get("/login", (req, res) => {
    res.render("./listings/auth/login.ejs")
});


app.post("/login", async (req, res) =>{
    const data = req.body.data;
    const findUserByEmail = await User.findOne({email: data.email});
    console.log(findUserByEmail);
    
});



app.all("*", (req, res, next) =>{
    next(new ExpressError(404, "Page Not Found"))
});


app.use((err, req, res, next) => {
    let{statusCode = 500, message= "Some Error Occoured"} = err;
    res.status(statusCode).render("./listings/error.ejs", {err});
    // res.status(statusCode).send(message);
});








app.listen(port, () => {
    console.log(`Server is running on port no. ${port}`);
});

