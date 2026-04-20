import z from "zod";

export const PaymentSchema = z.object({
    type: z.string().min(2, "o tipo de pagamento é obrigatório"),
    total: z.number().positive()
})



export type PaymentDTO = z.infer<typeof PaymentSchema>;