import { ClientDTO } from "../controllers/schemas/clientSchema.js";
import { ClientRepository } from "../repository/ClientRepository.js";

export class ClientService {

    constructor(private readonly clientRepository: ClientRepository) { }

    async create(data: ClientDTO) {
        return await this.clientRepository.create(data)
    }
}