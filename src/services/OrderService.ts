import { OrderDTO } from "../controllers/schemas/orderSchema.js";
import { DeliveryRepository } from "../repository/DeliveryRepository.js";
import { OrderRepository } from "../repository/OrderRepository.js";
import { PaymentRepository } from "../repository/PaymentRepository.js";

export class OrderService {

    constructor(
        private readonly orderRepository: OrderRepository,
        private readonly paymentRepository: PaymentRepository,
        private readonly deliveryRepository: DeliveryRepository,
    ) { }

    async create(
        data: OrderDTO,
    ) {

        const _dataPayment = await this.paymentRepository.create(data.payment);
        const _dataDelivery = await this.deliveryRepository.create(data.delivery);
          const _dataOrder = await this.orderRepository.create({
            client_id: data.client_id,
            delivery_id: _dataDelivery.id,
            payment_id: _dataPayment.id
          });

        return { _dataOrder, _dataPayment, _dataDelivery };
    }

    async findById(id: string) {
        const _dataId = await this.orderRepository.findById(id);

        return _dataId;
    }
    
}