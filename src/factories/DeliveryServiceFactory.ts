import { DeliveryService } from "../services/DeliveryService.js";
import { DeliveryRepositoryFactory } from "./DeliveryRepositoryFactory.js";

export const DeliveryServiceFactory = new DeliveryService(DeliveryRepositoryFactory);