import express from 'express';
import usersController from '../controllers/users.controller';

const router = express.Router();

router.get('/users', usersController.showAllUsers);
router.post('/users', usersController.createUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

export default router;