import { OrderDTO } from "../controllers/schemas/orderSchema.js";
import { OrderRepository } from "../repository/OrderRepository.js";

export class OrderService {

    constructor(private readonly orderRepository: OrderRepository) {}

    async create(data: OrderDTO) {
        return await this.orderRepository.create(data);
    }
}