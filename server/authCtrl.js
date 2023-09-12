import { User } from "./DB/model.js";
import bcrypt from "bcryptjs";

export default {
  user: async (req, res) => {
    // console.log("Hit User");
    if(req.session.user) res.send(req.session.user);
    else res.status(401).send({message: "Please login!"})
  },
  register: async (req, res) => {
    // console.log("hit register");
    let {email, password, first, last} = req.body;
    email = email.trim().toLowerCase();
    first = first.trim().toLowerCase();
    last = last.trim().toLowerCase();

    // Check if email is already in use
    const emailInUse = await User.findOne({where: {email}}).catch(err => console.log(err));
    if(emailInUse) res.status(401).send({message: "Email is already being used, try a differnt email of login!"});
    
    // Encrypt password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Create user account
    await User.create({first, last, email, password: hash})
    .catch((err) => res.status(400).send({err, message: "Problem creating new user!"}));
    res.status(200).send({message: "success"});

  },
  login: async (req, res) => {
    // console.log("hit login");
    const { email, password } = req.body;
    const user = await User.findOne({where: {email}});
    if(!user) res.status(404).send({message: "User not found!"});

    // Compare passwords
    if(bcrypt.compareSync(password, user.password)) {
      const { id, email, first, last } = user;
      req.session.user = {id, email, first, last};
      res.status(200).send(req.session.user);
    } else res.status(401).send({message: "Incorrect password try again!"});
  },
  logout: async (req, res) => {
    // console.log("hit logout");
    await req.session.destroy();
    res.send({message: "Logout successful!"});
  }
};