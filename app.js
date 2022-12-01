// SETUP
import express from "express";

const	app		= express(),
		port	= process.env.PORT || 3000;


app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


// ROUTES
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