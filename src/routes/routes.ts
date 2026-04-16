import { Router } from "express";
import { ClientController } from "../controllers/ClientController.js";

const routes = Router();

const clientRoutes = new ClientController();


// CLIENT ROUTES ---------------------------
routes.post('/client', clientRoutes.create);
routes.get('/client', clientRoutes.getAll);
routes.get('/client/:id', clientRoutes.findById);
routes.patch('/client/:id', clientRoutes.edit); 


export { routes };