import * as express from "express"
import * as bodyParser from "body-parser"
import { AppDataSource } from "./data-source"
import routes from "./routes"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(routes);

    app.listen(3333);

}).catch(error => console.log(error))


