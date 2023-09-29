const User = require("../model/userModal");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const generateToken = (data) => {
    console.log('data in token', data)
    const token = jwt.sign(data, process.env.SECRET_KEY);
    console.log('token', token);
    return token
}

const createUser = async (req, res) => {
  const { password } = req.body;
  // const saltRounds = bcrypt.genSaltSync(10);
  // console.log('saltRounds', saltRounds);
  // const hashedPassword = bcrypt.hashSync(password, saltRoundssaltRounds);

  // console.log('password', password);
  // console.log('hashedPassword', hashedPassword);

  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = req.body;
  user.password = hashedPassword;
  try {
    const userData = await User.create(user);
    res.status(201).json({ status: "success", data: userData });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err.message });
  }
  res.send("created");
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // step 1: find the user in DB
  // return the first matched document not an array
  try {
    const user = await User.findOne({ email });
    if (user) {
      // step 2: match the password
      // console.log('user', user);
      // console.log('password from body', password);
      // console.log('password from DB', user.password);

      // takes plane text password and hashed password and returns boolean based on result
      const isPasswordMatched = bcrypt.compareSync(password, user.password);
      console.log("isPasswordMatched", isPasswordMatched);
      if (isPasswordMatched) {
        const token =  generateToken({email: user.email, team: user.team})
        res
          .status(200)
          .json({ status: "success", message: "login successful", token });
      } else {
        res.status(400).json({ status: "fail", message: "wrong password" });
      }
    } else {
      res.status(400).json({ status: "failed", message: "user not found" });
    }
  } catch (err) {
    res.status(404).json({ status: "failed", message: err.message });
  }
};

const getProfile = (req, res) => {
    const {authorization}= req.headers;
    const authArr = authorization.split(" ")
    console.log('token', authArr[1]);
    const userInfo =  jwt.verify( authArr[1], process.env.SECRET_KEY);
    console.log('userInfo', userInfo);
    res.status(200).json({data: userInfo});
};

module.exports = { createUser, loginUser, getProfile };
