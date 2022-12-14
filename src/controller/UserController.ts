import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { Response, Request } from "express";

class UserController {

    createUser = async (req: Request, res: Response) => {

        if(req.body.id) {
            res.json({ message: "You are not allowed to set someone's id"});
            return res.sendStatus(400);
        }

        const user = await AppDataSource.getRepository(User).save(req.body);
        res.json(user);
    };

    getUsers = async (req: Request, res: Response) => {

        const users = await AppDataSource.getRepository(User).find();

        return res.json(users);
    };

    getUserById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const user = await AppDataSource.getRepository(User).findOne({ where: { id: id }});

        return res.json(user);
    };

    deleteUserById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const user = await AppDataSource.getRepository(User).delete(id);

        if (user.affected == 1) {
            await AppDataSource.getRepository(User).find();
            return res.json({ message: "User removed successfully!" });
        }

        return res.status(404).json({ message: "User not found" });
    };

    activeAccount = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const user = await AppDataSource.getRepository(User).update(id, {
            isActive: true
        });

        return res.json(user);
    };
}

export const userController = new UserController();
