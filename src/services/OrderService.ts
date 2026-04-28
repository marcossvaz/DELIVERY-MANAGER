import { AddItemInOrderDTO } from "../controllers/schemas/itemSchema.js";
import { OrderDTO } from "../controllers/schemas/orderSchema.js";
import { DeliveryRepository } from "../repository/DeliveryRepository.js";
import { ItemRepository } from "../repository/ItemRepository.js";
import { OrderRepository } from "../repository/OrderRepository.js";
import { PaymentRepository } from "../repository/PaymentRepository.js";

export class OrderService {

    constructor(
        private readonly orderRepository: OrderRepository,
        private readonly paymentRepository: PaymentRepository,
        private readonly deliveryRepository: DeliveryRepository,
        private readonly itemRepository: ItemRepository
    ) { }

    async create(data: OrderDTO,) {

        const _dataPayment = await this.paymentRepository.create(data.payment);
        const _dataDelivery = await this.deliveryRepository.create(data.delivery);
        const _dataOrder = await this.orderRepository.create({
            client_id: data.client_id,
            delivery_id: _dataDelivery.id,
            payment_id: _dataPayment.id,
        });


        return { _dataOrder, _dataPayment, _dataDelivery };
    }

    async findById(id: string) {
        const _dataId = await this.orderRepository.findById(id);

        return _dataId;
    }

    async addItemInOrder(data: AddItemInOrderDTO, order_id: string) {
        const item = await this.itemRepository.getById(data.item_id);

        if (!item) throw new Error("Item não encontrado");

        const existingOrderItem = await this.orderRepository.findOrderItem(order_id, data.item_id);

        if (!existingOrderItem) {
            const unit_price = item.item_price * data.quantity;
            return await this.orderRepository.addItemInOrder(data, unit_price);
        } else {
            const updateNewQuantity = existingOrderItem.quantity + Number(data.quantity);
            await this.orderRepository.updateItem({quantity: updateNewQuantity}, existingOrderItem.id);
            return this.orderRepository.findOrderItem(order_id, data.item_id);
        }
    }

    //TODO implementar o order_item alterar o model schema no prisma para criar ligação com ITEM
    //TODO criar função de para caluclo de frete ou Usar API de frete
}