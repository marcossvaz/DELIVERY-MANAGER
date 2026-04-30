import z from "zod";


export const updateSchema = z.object({
        status: z.enum(['PENDING', 'PICKING', 'SHIPPED', 'DELIVERED', 'CANCELLED', 'FAILED'])
})

export const idUpdateSchema = z.object({
    id: z.string().min(2, "id obrigatório")
})