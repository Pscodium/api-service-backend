import { Router } from 'express';
import { createColor, deleteColorById, getColors, getColorsById } from './controller/ColorsController';
import { getUsers, getUserById, createUser, deleteUserById, activeAccount } from './controller/UserController';


const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello, World!' });
});

routes.post('/users', createUser);

routes.get('/users', getUsers);

routes.get('/users/:id', getUserById);

routes.delete('/users/:id', deleteUserById);

routes.get('/users/active/:id', activeAccount);

routes.post('/color', createColor);

routes.get('/colors', getColors);

routes.get('/color/:id', getColorsById);

routes.delete('/colors/:id', deleteColorById);

export default routes;
