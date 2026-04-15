import { ClientService } from "../services/ClientService.js";
import { ClientRepositoryFactory } from "./ClientRepositoryFactory.js";


export const ClientServiceFactory = new ClientService(ClientRepositoryFactory);