import { prisma } from "../lib/prisma.js";

export class EmployeeRepository {
    async findByRg(rg: string) {
        return await prisma.employee.findFirst({
            where: {rg}
        })
    }
}