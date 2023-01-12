const { initializeApp, applicationDefault } = require("firebase-admin/app");
initializeApp({ credential: applicationDefault() });
const { getAuth } = require("firebase-admin/auth");
const authMiddleWare = require("firebase-auth-express-middleware");
const firebaseAuth = getAuth();

express = require("express");
const app = express();

app.use(authMiddleWare.authn(firebaseAuth));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./routes/user.routes")(app);

app.get("/user", (req, res) => {
	console.log("Decoded token: ", req.authenticatedUser);

	res.status(200).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
