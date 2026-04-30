import { DeliveryDTO } from "../controllers/schemas/deliverySchema.js";
import { prisma } from "../lib/prisma.js";
import { Status } from "../models/Status.js";

export class DeliveryRepository {
    async create(data: DeliveryDTO) {
        return await prisma.delivery.create({
            data: {
                modality: data.modality,
                adrress: {
                    create: {
                        city: data.address.city,
                        street: data.address.street,
                        evenue: data.address.evenue,
                        cep: data.address.cep,
                        uf: data.address.uf,
                        is_primary: data.address.is_primary
                    }
                }
            }
        })
    }

    async updateStatus(id: string, status: Status) {
        return await prisma.delivery.update({
            where: {id},
            data: status
        })
    }
}