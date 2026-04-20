import z from "zod";

const StatusEnum = z.enum(['PENDING', 'SHIPPED', 'DELIVERED', 'CANCELLED', 'FAILED'])

export const DeliverySchema = z.object({
    modality: z.string().min(2, "modalidade de entrega obrigatário"),
    status: StatusEnum.default('PENDING'), // the default status is PEDDING
    // Address fields 
    city: z.string().min(2, "O nome da cidade é obrigatório"),
    street: z.string().min(2, "O nome da cidade é obrigatória"),
    evenue: z.string().min(2, "O nome da evenida é obrigatória"),
    CEP: z.string().min(2, "o cep é obrigatório"),
    UF: z.string().min(2, "O uf é obrigatório")
})


export type DeliveryDTO = z.infer<typeof DeliverySchema>;