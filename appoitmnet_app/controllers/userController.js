const User = require('../models/user');


exports.createUser = async (req, res) => {
    try {
        const { name, phone, email } = req.body;
        const user = await User.create({ name, phone, email });
        res.status(201).json({ message: 'User created', user });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};


exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
};


exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await User.destroy({ where: { id: userId } });
        res.status(200).json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
};
