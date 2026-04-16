import { Router } from "express";
import { ClientController } from "../controllers/ClientController.js";
import { OrderClient } from "../controllers/OrderController.js";

const routes = Router();

const clientRoutes = new ClientController();
const orderRoutes = new OrderClient();

// CLIENT ROUTES ---------------------------
routes.post('/client', clientRoutes.create);
routes.get('/client', clientRoutes.getAll);
routes.get('/client/:id', clientRoutes.findById);
routes.patch('/client/:id', clientRoutes.edit); 

// ORDER ROUTES -----------------------------
routes.post('/order', orderRoutes.create);

export { routes };