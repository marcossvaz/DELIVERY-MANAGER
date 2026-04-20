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
}