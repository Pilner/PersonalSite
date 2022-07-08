// SETUP
var express		= require("express"),
	bodyParser	= require("body-parser"),
	app			= express(),
	mongoose	= require("mongoose");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("assets"));



// ROUTE
app.get("/", (req, res) => {
	try {
		res.render("home");
	} catch(err) {
		res.send("You have an error!");
		console.log(err);
	}
})

app.get("/about", (req, res) => {
	try {
		res.render("about");
	} catch(err) {
		res.send("You have an error!");
		console.log(err);
	}
})


// LISTEN
app.listen(3000, () => {
	console.log("server starting on port 3000");
})