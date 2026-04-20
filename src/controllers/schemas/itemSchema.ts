import z from "zod";
// TODO fazer o teste de entrada de dados e depois criar a função geradora de SKU, depois fazer implemetanção de ORDER
export const ItemSchema = z.object({
    sku: z.string().optional(),
    item_name: z.string().min(2, "nome do produto"),
    item_size:  z.number().min(2, "tamanho do produto obrigatório"),
    item_price: z.number().min(2, "Preço obrigatório")
})

export type itemDTO = z.infer<typeof ItemSchema>;