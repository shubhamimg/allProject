const mongoose = require("mongoose");

main().then(() =>{
    console.log("Conection SuccessFul");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
};

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);


// const user2 = new User({
//   name: "eve Doe",
//   email: "40edoe@example.com",
//   age: 40
// });

// user2.save().then((res) =>{
//   console.log(res);
// }).catch((err) =>{
//   console.log(err);
// });

// InersertMany

// User.insertMany([
//   {
//     name: "preeti",
//     email: "preeti@gmail.com",
//     age: 23
//   },
//   {
//     name: "Vikram",
//     email: "vikram@gmail.com",
//     age: 24
//   },
//   {
//     name: "Mohit",
//     email: "Mohit@gmail.com",
//     age: 25
//   },
//   {
//     name: "Chomu",
//     email: "Chomu@gmail.com",
//     age: 28
//   },
//   {
//     name: "newGirl",
//     email: "newGirl@gmail.com",
//     age: 21
//   },
// ]).then((res) =>{
//   console.log(res);
// });

// User.findById('67530d866d7d0cfe53592d01').then((data) =>{
//   console.log(data);
// });

// User.findOneAndUpdate({name: "Chomu"}, {age: 29}, {new: true}).then((res) =>{
//   console.log(res);
// }).catch((err) =>{
//   console.log(err);
// });

User.findOneAndDelete({name: "John Doe"}).then((res) =>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
});



