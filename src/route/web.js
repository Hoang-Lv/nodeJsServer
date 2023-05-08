import express from 'express'
import Controller from '../controllers/controller'

const router = express.Router()

const initWebRoutes = (app)=> {
    router.get('/',Controller.home)
    return app.use('/',router)
}
export default initWebRoutes