import { AddItemInOrderDTO, UpdateItemInOrderDTO } from "../controllers/schemas/itemSchema.js";
import { prisma } from "../lib/prisma.js";
import { Order } from "../models/Order.js";

export class OrderRepository {

    async create(data: Order) {
        return await prisma.order.create({
            data: {
                client_id: data.client_id,
                delivery_id: data.delivery_id,
                payment_it: data.payment_id,
            },
            include: {
                client: true,
                deliverys: {
                    include: {
                        adrress: true
                    }
                }
            }
        })
    }

    async findById(id: string) {
        return await prisma.order.findUnique({
            where: { id },
            include: {
                deliverys: {
                    include: {
                        adrress: true
                    }
                }
            }
        })
    }

    async addItemInOrder(data: AddItemInOrderDTO, unit_price: number) {
        return await prisma.order_Items.create({
            data: {
                quantity: data.quantity,
                item_id: data.item_id,
                order_id: data.order_id,
                unit_price: unit_price
            }, include: {
                orders: true,

            }
        })
    }

    async updateItem(data: UpdateItemInOrderDTO,id:string) {
        return await prisma.order_Items.update({
            where: {
                id
            },
            data: {
                ...data
            }
        })
    }

}