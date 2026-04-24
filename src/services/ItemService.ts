import { itemDTO } from "../controllers/schemas/itemSchema.js";
import { ItemRepository } from "../repository/ItemRepository.js";
import { GenerateSKU } from "./helpers/generateSKU.js";

export class ItemService {

    constructor(private readonly itemRepository: ItemRepository) { }

    async create(data: itemDTO) {

        const generateSKU = GenerateSKU(data.sku.name, data.sku.brand, data.sku.type);

        return await this.itemRepository.create(data, generateSKU);
    }

    async getById(id: string) {
        return await this.itemRepository.getById(id);
    }
}