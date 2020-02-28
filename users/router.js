const router = require('express').Router();

const Users = require('./model');

// router.get('/', (req, res) => {
//     res.json({ router: 'users' })
// });

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

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const users = await Users.findById(id)
        res.json(users)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to get the user by id' })
    }
});

router.post('/', async (req, res) => {
    try {
        const user = await Users.add(req.body)
        res.status(201).json(user)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to add new user' })
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const users = await Users.update(req.body, id)
        res.json(users)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to update the user' })
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const removed = await Users.remove(id)
        res.json(removed)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ errpr: 'Failed to remove user' })
    }
});

module.exports = router;