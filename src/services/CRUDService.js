import bcrypt from 'bcryptjs';
import db from '../models/index';

const salt = bcrypt.genSaltSync(10);

async function hashUserPassword(pass) {
    return await bcrypt.hashSync(pass, salt);
}
class CRUDService {
    async createNewUser(data) {
        try {
            const newPass = await hashUserPassword(data.password);
            await db.User.create({ ...data, password: newPass });
        } catch (err) {
            console.log(err);
        }
    }
    async editUser(data) {
        try {
            // await db.User.update({ ...data }, { where: { id: data.id } });
            const user = await db.User.findOne({ where: { id: data.id } });
            if (user) {
                user.email = data.email;
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.phoneNumber = data.phoneNumber;
                user.gender = data.gender;
                user.roleId = data.roleId;
                await user.save();
            }
        } catch (err) {
            console.log(err);
        }
    }
    async getUser(data) {
        try {
            return await db.User.findOne({ where: { id: data } });
        } catch (err) {
            console.log(err);
        }
    }
    async deleteUser(data) {
        try {
            const user = await db.User.findOne({ where: { id: data } });
            if (user) user.destroy();
            else return user;
        } catch (err) {
            console.log(err);
        }
    }
}

export default new CRUDService();
