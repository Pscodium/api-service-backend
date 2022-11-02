import * as express from "express";
import * as bodyParser from "body-parser";
import { AppDataSource } from "./data-source";
import routes from "./routes";
import * as cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

AppDataSource.initialize().then(async () => {

    const allowedOrigins = [process.env.FRONTEND_ORIGIN];

    const options: cors.CorsOptions = {
        origin: allowedOrigins
    };

    const app = express();

    app.use(bodyParser.json());
    app.use(cors(options));
    app.use(routes);

    app.listen(3333);

}).catch(error => console.log(error));


