import { User } from "./DB/model.js";

let userData = {};

export default {
  user: async (req, res) => {
    if(req.session.email) {
      const user = await User.findOne({where: {email: req.session.email}}).catch(err => {
        res.status(401).send(err, "Please log in!");
      });

      res.send(user);
    };
  },
  register: async (req, res) => {
    let {email, password, first, last} = req.body;
    email = email.trim().toLowerCase();
    first = first.trim().toLowerCase();
    last = last.trim().toLowerCase();

    try{
      await User.create({first, last, email, password});
      res.status(200).send({message: "success"});
    } catch (err){
      if(err) res.status(400).send(err);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({where: {email}});
    console.log(user, password);
    if(!user) res.status(404).send({message: "User not found!"});
    if(user.password === password) {
      req.session.email = user.email;
      res.send(user);
    } else res.status(401).send({message: "Incorrect password try again!"});
  },
  logout: async (req, res) => {
    await req.session.destroy();
    res.send({message: "Logout successful!"});
  }
};