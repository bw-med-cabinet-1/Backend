// const router = require('express').Router();
// const helper = require('./users-helper') ;
// // const bcryptjs = require(bcryptjs);

// router.get('/', (req, res) => {
//   helper.find('TABLE')
//   .then(rez => res.status(200).json(rez))
//   .catch(err => res.status(500).json({status: 500, err}))
// })
// router.get('/:id', (req, res) => {
//   const id = req.params.id
//   helper.findById(id, 'TABLE')
//   .then(rez => res.status(200).json(rez))
//   .catch(err => res.status(500).json({status: 500, err}))
// })
// router.post('/', (req, res) => {
//   helper.add(req.body, 'TABLE')
//   .then(rez => res.status(200).json(rez))
//   .catch(err => res.status(500).json({status: 500, err}))
// })
// router.put('/:id', (req, res) => {
//   const id = req.params.id
//   helper.update(req.body, id, 'TABLE')
//   .then(rez => res.status(200).json(rez))
//   .catch(err => res.status(500).json({status: 500, err}))
// })
// router.delete('/:id', (req, res) => {
//   const id = req.params.id
//   helper.remove(id, 'TABLE')
//   .then(rez => res.status(200).json(rez))
//   .catch(err => res.status(500).json({status: 500, err}))
// })
// function checkRole(role) {
//   return (req, res, next) => {
//     if (req.jwt.role === role) {
//       next();
//     } else {
//       res.status(403).json({ message: 'You are not authorized' });
//     }
//   };
// }
// module.exports = router

const express = require("express");
const bcryptjs = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");

const Users = require("./users-helper.js");

router.get("/users", protected, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.log(err.message);

            res.status(500).json({ message: err.message });
        });
});

router.post("/register", (req, res) => {
    const userInfo = req.body;
    const isValid = validateUser(userInfo);

    if (isValid) {
        // hash the password before saving the user to the database
        const rounds = process.env.BCRYPT_ROUNDS || 4;
        const hash = bcryptjs.hashSync(userInfo.password, rounds);
        userInfo.password = hash;

        Users.add(userInfo)
            .then(inserted => {
                res.status(201).json({ data: inserted });
            })
            .catch(error => {
                res.status(500).json({ message: error.message });
            });
    } else {
        res.status(400).json({
            message: "Invalid information, please verify and try again",
            user: userInfo,
            valid: isValid,
        });
    }
});

router.post("/login", (req, res) => {
    const creds = req.body;
    const isValid = validateCredentials(creds);

    if (isValid) {
        Users.findBy({ username: creds.username })
            .then(([user]) => {
                if (user && bcryptjs.compareSync(creds.password, user.password)) {
                  const token = makeJwt(user);
                    res.status(200).json({token});
                } else {
                    // no user by that username
                    res.status(401).json({ message: "you cannnot pass!!" });
                }
            })
            .catch(error => {
                res.status(500).json({ message: error.message });
            });
    } else {
        res.status(400).json({
            message: "Invalid information, please verify and try again",
        });
    }
});

function validateUser(user) {
    // has username, password
    return user.username && user.password ? true : false;
}

function validateCredentials(user) {
    // has username, password and role
    return user.username && user.password ? true : false;
};

function protected(req, res, next) {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET || "secret";

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Not allowed" });
      } else {
        req.jwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "No token" });
  }
}
function makeJwt(user) {
  const payload = {
    username: user.username,
    department: user.department,
    subject: user.id,
  };
  const config = {
    jwtSecret: process.env.JWT_SECRET || "secret",
  };
  const options = {
    expiresIn: "8 hours",
  };
  return jwt.sign(payload, config.jwtSecret, options);
}

module.exports = router;
