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
}