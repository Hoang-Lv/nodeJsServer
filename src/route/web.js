import express from 'express';
import Controller from '../controllers/controller';

const router = express.Router();

const initWebRoutes = (app) => {
    // Edit
    router.get('/delete-crud/:slug', Controller.deleteCRUD);
    // Edit
    router.post('/edit-crud/editing', Controller.editingCRUD);
    router.get('/edit-crud/:slug', Controller.editCRUD);
    // Create
    router.post('/create-crud/posting', Controller.postCRUD);
    router.get('/create-crud', Controller.createCRUD);

    // Home
    router.get('/', Controller.home);

    return app.use('/', router);
};
export default initWebRoutes;
