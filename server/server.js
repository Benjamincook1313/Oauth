import express from "express";
import viteExpress from "vite-express";
import authCtrl from "./authCtrl.js";
import session from "express-session";
// import { auth, requiresAuth } from "express-openid-connect";

const app = express();

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   baseURL: "http://localhost:4545",
//   clientID: "dev-euwoxunj20g2p2k2"
// }

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: "woodywoodchuck"
}));

const PORT = 4545;
const { register, user, login, logout, updateImage } = authCtrl;

// USER AUTHENTICATION
app.get("/api/user", user);
app.post("/api/register", register);
app.post("/api/login", login);
app.patch("/api/userImage/:id", updateImage);
app.delete("/api/logout", logout);

viteExpress.listen(app, PORT, () => console.log("Server listening on port " + PORT));