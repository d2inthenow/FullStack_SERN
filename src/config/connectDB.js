const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('d2', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection Database successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;