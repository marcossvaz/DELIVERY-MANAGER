import { OrderService } from "../services/OrderService.js";
import { OrderRepositoryFactory } from "./OrderRepositoryFactory.js";

export const OrderServiceFactory = new OrderService(OrderRepositoryFactory);