import { z } from "zod";


const StatusEnum = z.enum(['PENDING', 'SHIPPED', 'DELIVERED', 'CANCELLED', 'FAILED'])

export const OrderSchema = z.object({
    client_id: z.uuid(),
    delivery: z.object({
          modality: z.string().min(2, "modalidade de entrega obrigatário"),
          status: StatusEnum.default('PENDING'), // the default status is PEDDING
          // Address fields 
          city: z.string().min(2, "O nome da cidade é obrigatório"),
          street: z.string().min(2, "O nome da cidade é obrigatória"),
          evenue: z.string().min(2, "O nome da evenida é obrigatória"),
          CEP: z.string().min(2, "o cep é obrigatório"),
          UF: z.string().min(2, "O uf é obrigatório")
    }),
    payment: z.object({
        type: z.string().min(2, "o tipo de pagamento é obrigatório"),
        orders: z.string().min(2, "O Id do pedido é obrigatório"),
        client_id: z.uuid("id do cliente é obrigatório"),
        total: z.number().positive()
    }),
    order_items: z.array(z.object({
        item_id: z.uuid(),
        quantity: z.number().int().positive(),
        unit_price: z.number().positive(),
    })).min(1, "Pedido precisa de ao menos 1 item"),
});


export type OrderDTO = z.infer<typeof OrderSchema>;



