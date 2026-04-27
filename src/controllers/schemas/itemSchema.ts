import z from "zod";

export const SkuItemShema = z.object({
    name: z.string().min(2, "nome do produto"),
    brand: z.string().min(2, "o nome da marca é necessaário"),
    type: z.string().min(2, "o tipo é necessario")
})

export const ItemSchema = z.object({
    sku: SkuItemShema,
    item_name: z.string().min(2, "nome do produto"),
    weight: z.number().min(2, "tamanho é necessario"),
    depth: z.number().min(2, "profunidade é necessario"),
    height: z.number().min(2, "tamanho é necessário"),
    item_size:  z.number().min(2, "tamanho do produto obrigatório"),
    item_price: z.number().min(2, "Preço obrigatório"),
    item_quantity: z.number().min(2, "A quantidade é necessário").positive()
})

export const ItemId = z.object({
    id: z.string().min(2, "O id é obrigatório")
})


export const AddItemInOrder = z.object({
    quantity: z.number().positive("Quantidade é obrigatório"),
    item_id: z.string().min(2, "o id do item é necessaprio"),
    order_id: z.string().min(2, "o Id do order é necessário"),
});

export const UpdateItemInOrder = z.object({
    quantity: z.number().positive("quantidade é obrigatória")
})

export const orderById = z.object({
    id: z.string().min(2, "O id é obrigatóio")
})


export type UpdateItemInOrderDTO = z.infer<typeof UpdateItemInOrder>;
export type AddItemInOrderDTO = z.infer<typeof AddItemInOrder>;
export type itemDTO = z.infer<typeof ItemSchema>;
