import { itemDTO } from "../controllers/schemas/itemSchema.js";
import { prisma } from "../lib/prisma.js";

export class ItemRepository {
    async create(data: itemDTO) {
        return await prisma.item.create({
            data: {
                item_name: data.item_name,
                item_size: data.item_size,
                item_price: data.item_price,
            }, include: {
                orders_items: true
            }
        })
    }
}