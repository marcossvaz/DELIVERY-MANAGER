import z from "zod";

export const clientSchema = z.object({
    name: z.string().min(2, "o id do cliente é necessário"),
    contact: z.string().min(2, "o número é obrigatório"),
    rg: z.string().min(4, "o rg deve ser obrigatório")
})

export const findByIdClientSchema = z.object({
    id: z.string().min(1, "O Id é necessário")
})

export type ClientDTO = z.infer<typeof clientSchema>;
export type findByIdClientDTO = z.infer<typeof findByIdClientSchema>;