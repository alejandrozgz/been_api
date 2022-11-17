const User = require("../database/models").User;

exports.create = async (req, res, next) => {
	try {
		const { username, email } = req.body;
		// Validate user input
		if (!(username && email)) {
			res.status(400).send("All input is required");
		}

		// check if user already exist
		// Validate if user exist in our database
		const oldUser = await User.findOne({
			where: { username: username },
		});

		if (oldUser) {
			return res.status(409).send("User Already Exist. Please Login");
		}

		// Create user in our database
		const user = await User.create({
			username,
			email: email.toLowerCase(),
		});

		// return new user
		res.status(201).json(user);
	} catch (e) {
		console.log(e);
	}
};

exports.findOne = async (req, res, next) => {
	try {
		const { username, email } = req.body;

		// Validate user input
		if (!(username && password)) {
			res.status(400).send("All input is required");
		}

		// Validate if user exist in our database
		const user = await User.findOne({
			where: { username: username },
		});

		if (!oldUser) {
			return res.status(409).send("User NOT Exist. Please SignUp");
		}

		res.status(200).json(user);
	} catch (e) {
		console.log(err);
	}
};

exports.findAll = async (req, res, next) => {
	try {
		const user = User.findAll();

		res.status(201).json(user);
	} catch (e) {
		console.log(err);
	}
};
