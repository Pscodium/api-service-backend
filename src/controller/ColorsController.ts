import { AppDataSource } from "../data-source";
import { Color } from "../entity/Color";
import { Response, Request } from "express";
// import * as colorJson from '../database/colors.json';

class ColorController {

    createColor = async (req: Request, res: Response) => {
        const color = await AppDataSource.getRepository(Color).save(req.body);


        /* The lines below are responsible for inserting colors into the database **/

        // for(const props in colorJson) {
        //     console.log(colorJson[props])
        //     const obj = {
        //         db_color_name: props,
        //         color_name: colorJson[props].name,
        //         hex: colorJson[props].hex,
        //         rgb: colorJson[props].rgb
        //     };
        //     const color = await AppDataSource.getRepository(Color).save(obj);
        // }

        return res.json(color);
    };

    getColors = async (req: Request, res: Response) => {
        const colors = await AppDataSource.getRepository(Color).find();

        return res.json(colors);
    };

    getRandomColors = async (req: Request, res: Response) => {

        const colors = await AppDataSource.getRepository(Color).find();

        const colorsLength = colors.length;

        const randomColors = [];

        for (let i = 0; i < 5; i++) {
            const pos = Math.floor(Math.random() * colorsLength) + 1;
            const color = await AppDataSource.getRepository(Color).findOne({ where: { id: pos } });
            randomColors.push(color);
        }

        return res.json(randomColors);
    };

    getColorsById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const color = await AppDataSource.getRepository(Color).findOne({ where: { id: id } });

        return res.json(color);
    };

    deleteColorById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const color = await AppDataSource.getRepository(Color).delete(id);

        if (color.affected == 1) {
            await AppDataSource.getRepository(Color).find();
            return res.json({ message: "User removed successfully!" });
        }

        return res.status(404).json({ message: "Color not found" });
    };
}

export const colorController = new ColorController();
