import express from "express";
import viteExpress from "vite-express";
import ctrl from "./authCtrl.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const PORT = 4545;
const { register } = ctrl;

app.get("/start", (req, res) => res.send("It's Working!"));
app.get("/register", register);

viteExpress.listen(app, PORT, () => console.log("Server litening on port " + PORT));