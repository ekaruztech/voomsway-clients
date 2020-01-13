import { Router } from 'express';
import { AppController } from '../controller';

const router = Router();

router.get('/', AppController.index);
router.get('/vway/*', AppController.entry);
router.get('/terminals', AppController.terminals);
router.get('/about', AppController.about);
router.get('/contact', AppController.contact);
router.get('/terms', AppController.terms);
router.get('/receipt', AppController.receipt);
export default router;
