import { ClientDTO } from "../controllers/schemas/clientSchema.js";
import { ClientRepository } from "../repository/ClientRepository.js";

export class ClientService {

    constructor(private readonly clientRepository: ClientRepository) { }

    async create(data: ClientDTO) {
        return await this.clientRepository.create(data)
    }

    async getAll() {
        return await this.clientRepository.getAll();
    }

    async findByIdClient(id: string) {
        return await this.clientRepository.findByIdClient(id)
    }

    async edit(id: string, data: ClientDTO) {
        return  await this.clientRepository.edit(id, data);
    }
}