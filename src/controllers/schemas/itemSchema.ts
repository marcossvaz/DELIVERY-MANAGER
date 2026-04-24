import z from "zod";

export const SkuItemShema = z.object({
    name: z.string().min(2, "nome do produto"),
    brand: z.string().min(2, "o nome da marca é necessaário"),
    type: z.string().min(2, "o tipo é necessario")
})

export const ItemSchema = z.object({
    sku: SkuItemShema,
    item_name: z.string().min(2, "nome do produto"),
    item_size:  z.number().min(2, "tamanho do produto obrigatório"),
    item_price: z.number().min(2, "Preço obrigatório"),
    item_quantity: z.number().min(2, "A quantidade é necessário").positive()
})

export const ItemId = z.object({
    id: z.string().min(2, "O id é obrigatório")
})


export type itemDTO = z.infer<typeof ItemSchema>;
