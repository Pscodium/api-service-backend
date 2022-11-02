import { Router } from 'express';
import { colorController } from './controller/ColorsController';
import { userController } from './controller/UserController';


const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello, World!' });
});

routes.post('/users', userController.createUser);

routes.get('/users', userController.getUsers);

routes.get('/users/:id', userController.getUserById);

routes.delete('/users/:id', userController.deleteUserById);

routes.get('/users/active/:id', userController.activeAccount);

routes.post('/color', colorController.createColor);

routes.get('/colors', colorController.getColors);

routes.get('/color/:id', colorController.getColorsById);

routes.delete('/colors/:id', colorController.deleteColorById);

routes.get('/colors/random', colorController.getRandomColors);

export default routes;
