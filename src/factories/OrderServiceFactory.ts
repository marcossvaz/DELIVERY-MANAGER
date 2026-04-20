import { OrderService } from "../services/OrderService.js";
import { DeliveryRepositoryFactory } from "./DeliveryRepositoryFactory.js";
import { OrderRepositoryFactory } from "./OrderRepositoryFactory.js";
import { PaymentRepositoryFactory } from "./PaymentFactory.js";

export const OrderServiceFactory = new OrderService(
    OrderRepositoryFactory,
    PaymentRepositoryFactory,
    DeliveryRepositoryFactory,
);