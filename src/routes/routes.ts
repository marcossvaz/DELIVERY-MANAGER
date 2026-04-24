import { Router } from "express";
import { ClientController } from "../controllers/ClientController.js";
import { OrderController } from "../controllers/OrderController.js";
import { ItemController } from "../controllers/ItemController.js";

const routes = Router();

const clientRoutes = new ClientController();
const orderRoutes = new OrderController();
const itemRoutes = new ItemController()

// CLIENT ROUTES ---------------------------
routes.post('/client', clientRoutes.create);
routes.get('/client', clientRoutes.getAll);
routes.get('/client/:id', clientRoutes.findById);
routes.patch('/client/:id', clientRoutes.edit); 

// ORDER ROUTES -----------------------------
routes.post('/order', orderRoutes.create);
routes.get('/order/:id', orderRoutes.findbyId);

// ITEM ROUTES -----------------------------
routes.post('/item', itemRoutes.create);
routes.get('/item/:id', itemRoutes.getbyId);

export { routes };