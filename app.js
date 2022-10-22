// SETUP
const	express		= require("express"),
		bodyParser	= require("body-parser"),
		app			= express(),
		mongoose	= require("mongoose");
		port		= process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("assets"));



// ROUTE
app.get("/", (req, res) => {
	try {
		res.render("home");
	} catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})

app.get("/about", (req, res) => {
	try {
		res.render("about");
	} catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})

app.get("/contact", (req, res) => {
	try {
		res.render("contact");
	} catch (err) {
		res.render("errorpage");
		console.log(err);
	}
})

app.get("*", (req, res) => {
	res.render("errorpage");
})


// LISTEN
app.listen(port, () => {
	console.log(`Server starting on port ${port}`);
})