import express from 'express';
import { getUsers, addUser, deleteUser, updateUser} from './controllers/usersController.js'; // Verifique se o caminho está correto

const router = express.Router();

router.get('/', getUsers);

router.post('/', addUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;
