import { prisma } from "../lib/prisma.js";
import { Client } from "../models/Client.js";

export class ClientRepository {
    
    async create(data: Client) {
        return await prisma.client.create({
            data: {
                name : data.name,
                contact: data.contact,
                rg: data.rg
            }
        })
    }

    async getAll() {
        return await prisma.client.findMany();
    }

    async findByIdClient(id: string) {
        return await prisma.client.findUnique({
            where: {id}
        })
    }

    async edit(id: string, data: Client) {
        return await prisma.client.update({
            where: {id},
            data: data
        })
    }
}