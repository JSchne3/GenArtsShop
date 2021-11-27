import express from 'express'
const router = express.Router() 
import {getProductById, getProducts} from '../Controllers/productControllers.js'

router.route('/').get(getProducts)

router.route('/:id').get(getProductById)

export default router