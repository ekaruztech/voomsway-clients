import { Router } from 'express';
import { AppController } from '../controller';

const router = Router();

router.get('/', AppController.index);
router.get('/terminals', AppController.terminals);
router.get('/about', AppController.about);
router.get('/contact', AppController.contact);
router.get('/terms', AppController.terms);
export default router;
