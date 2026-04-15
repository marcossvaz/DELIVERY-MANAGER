import { Request, Response } from "express";
import { clientSchema } from "./schemas/clientSchema.js";
import { ClientServiceFactory } from "../factories/ClientServiceFactory.js";

export class ClientController {


    create = async (req: Request, res: Response) => {
        try {
            const value = clientSchema.parse(req.body);

            const result = await ClientServiceFactory.create(value)
            console.log(result)
            res.status(201).json(result);
        } catch (err: any) {
            res.status(401).json({ error: err.message })
        }
    }
}