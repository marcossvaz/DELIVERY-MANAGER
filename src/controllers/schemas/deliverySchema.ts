import z from "zod";

export const DeliverySchema = z.object({
    modality: z.string().min(2, "modalidade de entrega obrigatário"),
    address: z.object({
        city: z.string().min(2, "O nome da cidade é obrigatório"),
        street: z.string().min(2, "O nome da cidade é obrigatória"),
        evenue: z.string().min(2, "O nome da evenida é obrigatória"),
        cep: z.string().min(2, "o cep é obrigatório"),
        uf: z.string().min(2, "O uf é obrigatório"),
        is_primary: z.boolean().default(true)
    })
})


export type DeliveryDTO = z.infer<typeof DeliverySchema>;