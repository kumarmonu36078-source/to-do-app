import express from 'express'
import{getAllProduct,getProductById,updateProduct,deleteProduct, createNewProduct} from '../controller/product.controller.js'

const app = express();
const router = express.Router()

router.route('/add').post(createNewProduct)
router.route('/').get(getAllProduct)
router.route('/:id').get(getProductById)
router.route('/update').put(updateProduct)
router.route('/delete').delete(deleteProduct)








export default router