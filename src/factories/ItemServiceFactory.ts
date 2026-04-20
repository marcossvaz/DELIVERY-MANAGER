import { ItemService } from "../services/ItemService.js";
import { ItemRepositoryFactory } from "./itemRepositoryFactory.js";

export const itemServiceFactory = new ItemService(ItemRepositoryFactory)