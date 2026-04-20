import { PaymentDTO } from "../controllers/schemas/paymentSchema.js";
import { prisma } from "../lib/prisma.js";

export class PaymentRepository {
    async create(data: PaymentDTO) {
        return await prisma.payment.create({
            data: {
                type: data.type,
                orders: {
                    connect: {id: data.orders}
                },
                total: data.total
            }
        })
    }
}