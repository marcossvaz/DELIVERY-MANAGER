import { DeliveryDTO } from "../controllers/schemas/deliverySchema.js";
import { prisma } from "../lib/prisma.js";

export class DeliveryRepository {
    async create(data: DeliveryDTO) {
        return await prisma.delivery.create({
            data: {
                modality: data.modality,
                status: data.status,
                adrress: {
                    create: {
                        city: data.city,
                        street: data.street,
                        evenue: data.evenue,
                        cep: data.CEP,
                        uf: data.UF,
                    }
                }
            }
        })
    }
}