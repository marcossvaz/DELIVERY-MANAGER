import { itemDTO } from "../controllers/schemas/itemSchema.js";
import { ItemRepository } from "../repository/ItemRepository.js";

export class ItemService {

    constructor(private readonly itemRepository: ItemRepository) {}

    async create(data: itemDTO) {
        return await this.itemRepository.create(data);
    }
}