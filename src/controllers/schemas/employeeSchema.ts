import z from "zod";

export const employeeSchema = z.object({
    name: z.string().min(2, 'nome obrigatório'),
    password: z.string().min(2, 'senha obrigatório'),
    rg: z.string().min(2, 'rg obrigatório'),
    type: z.string().min(2, 'tipo do status na empresa é obrigatório')
})

export const employeeFindByRgSchema = z.object({
    rg: z.string().min(2, 'rg obrigatório')
})

export type EmploeeSchemaDTO = z.infer<typeof employeeSchema>;