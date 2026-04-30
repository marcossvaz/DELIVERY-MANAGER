import { myDeliveryQueue } from "../lib/queue.js";
import { Status } from "../models/Status.js";
import { DeliveryRepository } from "../repository/DeliveryRepository.js";

export class DeliveryService {

    constructor(private readonly delivertuRepository: DeliveryRepository) {}

    async updateStatus(id: string, status: Status){
        await this.delivertuRepository.updateStatus(id, status);

        await myDeliveryQueue.add('status-update', {
            delivery_id: id,
            status
        });
    }
}