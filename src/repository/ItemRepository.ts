import { itemDTO } from "../controllers/schemas/itemSchema.js";
import { prisma } from "../lib/prisma.js";

export class ItemRepository {
    async create(data: itemDTO, sku: string) {
        return await prisma.item.create({
            data: {
                item_name: data.item_name,
                item_size: data.item_size,
                item_price: data.item_price,
                item_quantity: data.item_quantity,
                weight: data.weight,
                depth: data.depth,
                height: data.height,
                sku: sku || null
            }, include: {
                orders_items: true
            }
        })
    }

    async getById(id: string) {
        return await prisma.item.findFirst({
            where:{id}
        });
    }
}