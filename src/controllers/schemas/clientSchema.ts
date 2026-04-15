import z from "zod";

export const clientSchema = z.object({
    name: z.string().min(2, "o id do cliente é necessário"),
    contact: z.string().min(2, "o número é obrigatório"),
    rg: z.string().min(4, "o rg deve ser obrigatório")
})



export type ClientDTO = z.infer<typeof clientSchema>;