import { PaymentDTO } from "../controllers/schemas/paymentSchema.js";
import { prisma } from "../lib/prisma.js";

export class PaymentRepository {
    async create(data: PaymentDTO) {
        return await prisma.payment.create({
            data: {
                type: data.type,
                total: data.total
            }
        })
    }
}