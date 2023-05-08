import express from 'express'
import bodyParser from 'body-parser'
import viewEngine from './config/viewEngine.js'
import initWebRoutes from './route/web.js'
import dotenv from 'dotenv'
import connectDb from './config/connectDb.js'
// cách để có thể sử dụng process.env 
dotenv.config()

const app = express()
const {urlencoded} = bodyParser


// config app
app.use(bodyParser.json())
app.use(bodyParser(urlencoded({extended:true})))
viewEngine(app)
initWebRoutes(app) 


// Connect to database
// connectDb()

const port = process.env.PORT
app.listen(port,()=> {
    console.log('Successfully' + port)
})