import { myDeliveryQueue } from "../lib/deliveryQueue.js";
import { Status } from "../models/Status.js";
import { DeliveryRepository } from "../repository/DeliveryRepository.js";


const validationTransitions: Record<Status, Status[]> = {
    PENDING: [Status.PICKING],
    PICKING: [Status.SHIPPED, Status.CANCELLED],
    SHIPPED: [Status.DELIVERED, Status.FAILED],
    DELIVERED: [],
    CANCELLED: [],
    FAILED: [Status.FAILED]
}


export class DeliveryService {

    constructor(private readonly delivertuRepository: DeliveryRepository) {}

    async updateStatus(id: string, status: Status){

        const delivery = await this.delivertuRepository.findById(id);

        if(!delivery) throw new Error(`Entrega não encontrada`)

        const allowed = validationTransitions[delivery.status];

        if(!allowed.includes(status)) {
            throw new Error(`transição inválida ${delivery.status} --> ${status}`)
        }

        await this.delivertuRepository.updateStatus(id, status);

        await myDeliveryQueue.add('status-update', {
            delivery_id: id,
            status
        });
    }
}