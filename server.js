const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(_req, res) {
	res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res) {
	const weight = Number(req.body.weight);
	const height = Number(req.body.height);
	const bmi = (weight/(height*height)).toFixed(2);
	res.send(`<h1>Your BMI is ${bmi}</h1>`);
});

const port = 3000;

app.listen(port, function() {
	console.log("Server has started on port " + port);
});