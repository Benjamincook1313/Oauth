import express from "express";
import viteExpress from "vite-express";
import authCtrl from "./authCtrl.js";
import session from "express-session";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: "woodywoodchuck"
}));

const PORT = 4545;
const { register, user, login, logout } = authCtrl;

// USER AUTHENTICATION
app.get("/api/user", user);
app.get("/api/logout", logout);
app.post("/api/register", register);
app.post("/api/login", login);

viteExpress.listen(app, PORT, () => console.log("Server listening on port " + PORT));