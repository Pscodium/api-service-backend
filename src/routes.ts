import { Router } from 'express';
import { getUsers, getUserById, createUser, deleteUserById } from './controller/UserController';


const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello, World!' });
});

routes.post('/users', createUser)

routes.get('/users', getUsers)

routes.get('/users/:id', getUserById)

routes.delete('/users/:id', deleteUserById)

export default routes;