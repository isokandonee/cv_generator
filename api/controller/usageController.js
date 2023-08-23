const User = require("../model/User");
const Template = require("../model/Template");
const Resume = require("../model/Resume");
const path=require("path")

/**
// app.get('/redirect', (req, res) => {
 // res.redirect('/target-page'); // Perform the redirect
 //});

 app.get("/custom-route", (req, res) => {
   res.sendFile(__dirname + "/public/index.html"); // Serve index.html under /custom-route
 });

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend", "index.html"));
});

 */

const template = "creative";
const displayTemplate = (req, res) => {
  if (template === "creative") {
    res.sendFile(path.resolve(__dirname, "../public/template", "creative.html"));
  } else if (template === "professional") {
    res.sendFile(path.resolve(__dirname, "../public/template", "professional.html"));
  } else if (template === "modern") {
    res.sendFile(path.resolve(__dirname, "../public/template", "modern.html"));
  } else {
    res.sendFile(path.resolve(__dirname, "../public/template", "simple.html"));
  }
};


module.exports=displayTemplate
