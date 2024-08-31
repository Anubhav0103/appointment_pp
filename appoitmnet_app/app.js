const sequelize = require('./models/database');
const User = require('./models/user');

sequelize.sync()
    .then(() => console.log('Database & tables created!'))
    .catch(err => console.error('Error syncing database:', err));

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
    
const app = express();
    
app.use(bodyParser.json());
app.use(express.static('public'));
    
app.use('/api', userRoutes);
    
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
    