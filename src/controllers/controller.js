import db from '../models/index';
const Controller = {
    async home(req, res, next) {
        try {
            const data = await db.User.findAll();
            if (data) res.json(data);
        } catch (err) {
            console.log(err);
        }
    },
};
export default Controller;
