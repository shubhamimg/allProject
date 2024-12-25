const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ExpressError = require("./ExpressError");

const port = 9090;

// app.use((req, res, next) =>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.path, req.hostname, req.time);
//     next();
// });


 const checktoken = (req, res, next) =>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "Access Denied")
};

app.get("/", (req, res) =>{
    res.send("I am Working")
});

app.get("/random", checktoken, (req, res) =>{
    res.send("I am random")
});


app.get("/api", checktoken, (req, res) =>{
    res.send("Data");
});


app.get("/err", (req, res) =>{
    abcd = abcd;
});


app.get("/admin", (req, res) =>{
    throw new ExpressError(403, "Access admit Forbidded");
})

app.use((err, req, res, next) =>{
    let {status = 500, message= "Some error occoured"} = err;

    res.status(status).send(message);
});

app.listen(port, () =>{
    console.log(`Server is listening port ${port}`);
});