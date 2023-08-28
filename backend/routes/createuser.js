const express = require('express');
const router = express.Router();
const User = require("../models/UserSchema"); // Correct the User import path here
const { body, validationResult } = require('express-validator');

const jwtsecret = "I am Tayyab Akhlaq from Faisalabad doing BSCS  .";
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post("/createuser",
  [
    body('email').isEmail().normalizeEmail(),
    body('name').trim().isLength({ min: 5 }),
    body('password').trim().isLength({ min: 5 }),
  ],
  async (req, res) => {

    const salt = await bcrypt.genSalt();
    const securepassword = await bcrypt.hash(req.body.password,salt);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await User.create({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        password: securepassword,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post("/loginuser",

  [
    body('email').isEmail().normalizeEmail(),
    body('password').trim().isLength({ min: 5 }),
  ],
  
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })};
    let email = req.body.email;
    try {
      let userdata = await User.findOne({email});
      if(!userdata)
      {
        return res.status(400).json({errors:"email masla"});
      }

       const pwdcompare = await bcrypt.compare(req.body.password,userdata.password)
      if(!pwdcompare)
      {
        return res.status(400).json({errors:"not found"});
      }

      const data = {
        user : {
          id:userdata.id
        }
      }
      const authToken = jwt.sign(data,jwtsecret)
      return res.json({ success: true, authToken:authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
