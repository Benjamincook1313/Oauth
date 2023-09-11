const userData = {};

export default {
  user: (req, res) => {
    if(req.session.email) res.send(userData);
    else res.status(401).send("Please Log in!");
  },
  register: (req, res) => {
    console.log("Hit Register");
    const {email, pass} = req.body;

    userData.email = email;
    userData.status = "Logged in";
    userData.id = 1;

    res.send({message: "success", userData});
  },
  login: (req, res) => {
    const { email, pass } = req.body;
    console.log("Hit Login");
    req.session.email = email;
    if(userData.email === email) res.send(userData);
    else res.sendStatus(401);
  },
  logout: (req, res) => {
    console.log("hit logout");
  }
};