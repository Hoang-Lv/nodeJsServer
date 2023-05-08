// const { Sequelize } = require('sequelize');
import Sequelize from 'sequelize';


const sequelize = new Sequelize('news', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
})
async function connectDb () {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully')
    } catch(err) {
        console.error('Unable to connect to the database:', err)
    }
}
export default connectDb