import { z } from "zod";

export const OrderSchema = z.object({
    client_id: z.string(),
    delivery: z.object({
        modality: z.string().min(2, "modalidade de entrega obrigatário"),
        // Address fields 
        address: z.object({
            city: z.string().min(2, "O nome da cidade é obrigatório"),
            street: z.string().min(2, "O nome da cidade é obrigatória"),
            evenue: z.string().min(2, "O nome da evenida é obrigatória"),
            cep: z.string().min(2, "o cep é obrigatório"),
            uf: z.string().min(2, "O uf é obrigatório"),
            is_primary: z.boolean().default(true),
        })

    }),
    payment: z.object({
        type: z.string().min(2, "o tipo de pagamento é obrigatório"),
        total: z.number().positive()
    }),
    order_items: z.array(z.object({
        item_id: z.string(),
        quantity: z.number().int().positive(),

    })).min(1, "Pedido precisa de ao menos 1 item"),
});


export const OrderById = z.object({
    id: z.string().min(2, "o Id do pedido é obrigatório...")
})


export type OrderByIdDTO = z.infer<typeof OrderById>;
export type OrderDTO = z.infer<typeof OrderSchema>;



