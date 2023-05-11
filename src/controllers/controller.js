import db from '../models/index';
import CRUDService from '../services/CRUDService';
const Controller = {
    async home(req, res, next) {
        try {
            const data = await db.User.findAll();
            res.render('home', { data });
        } catch {
            next;
        }
    },

    // Create
    async createCRUD(req, res, next) {
        res.render('crud-create-form');
    },
    async postCRUD(req, res, next) {
        try {
            await CRUDService.createNewUser(req.body);
            res.redirect('back');
        } catch {
            next;
        }
    },
    // Edit
    async editCRUD(req, res, next) {
        try {
            const data = await CRUDService.getUser(req.params.slug);
            res.render('crud-edit-form', { data });
        } catch {
            next;
        }
    },
    async editingCRUD(req, res, next) {
        try {
            await CRUDService.editUser(req.body);
            const data = await db.User.findAll();
            res.render('home', { data });
        } catch {
            next;
        }
    },
    async deleteCRUD(req, res, next) {
        try {
            const result = await CRUDService.deleteUser(req.params.slug);
            if (result) res.redirect('back');
            else res.send('User not found');
        } catch {
            next();
        }
    },
};
export default Controller;
