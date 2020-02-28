const router = require('express').Router();

const Users = require('./model');

router.get('/', (req, res) => {
    res.json({ router: 'users' })
});

// router.get("/",(req, res) => {
//     Users.find()
//       .then(users => {
//         res.json(users);
//       })
//       .catch(err => res.send(err));
//   });

router.get('/', async (req, res) => {
    try {
        const users = await Users.find()
        res.json(users)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to get the users' })
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = req.body
        const user = await Task.add(newUser)
        res.json(user)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to add new user' })
    }
});


module.exports = router;