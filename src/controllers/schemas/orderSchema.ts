import { z } from "zod";

export const OrderSchema = z.object({
    client_id: z.string().min(2, "id do cliente é obrigatório"),
    delivery_id: z.string().min(2, "id do delivery é obrigatório"),
    payment_id: z.string().min(2, "Id do pagamento é obrigatório"),
    order_items_id: z.string().min(2, "Id do order_item é obrigatório")
})


export type OrderDTO = z.infer<typeof OrderSchema>;