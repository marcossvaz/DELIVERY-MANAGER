import { Router } from "express";
import { ClientController } from "../controllers/ClientController.js";

const routes = Router();

const clientRoutes = new ClientController();


// CLIENT ROUTES ------------
routes.post('/client', clientRoutes.create);

export { routes };