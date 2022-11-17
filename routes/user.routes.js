module.exports = (app) => {
	const user = require("../controllers/user.controller.js");

	var router = require("express").Router();

	router.post("/", user.create);
	router.get("/:username", user.findOne);
	router.get("/", user.findAll);

	app.use("/api/users", router);
};
