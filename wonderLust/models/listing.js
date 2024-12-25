const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/person-in-red-jacket-walking-on-gray-asphalt-road-during-daytime-FaaZgfFNIwA",
        set: (v) => v === "" ? "https://unsplash.com/photos/person-in-red-jacket-walking-on-gray-asphalt-road-during-daytime-FaaZgfFNIwA" : v,
    },
    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;