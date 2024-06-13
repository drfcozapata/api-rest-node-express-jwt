import { Router } from 'express';
import { getProducts } from '../controllers/product.controller';
import validateToken from './validate-token';

const router = Router();

router.get('/products', validateToken, getProducts);

export default router;
