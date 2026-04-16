import { Request, Response } from "express";
import { clientSchema, findByIdClientSchema } from "./schemas/clientSchema.js";
import { ClientServiceFactory } from "../factories/ClientServiceFactory.js";

export class ClientController {

    create = async (req: Request, res: Response) => {
        try {
            const value = clientSchema.parse(req.body);

            const result = await ClientServiceFactory.create(value)

            res.status(201).json(result);
        } catch (err: any) {
            res.status(401).json({ error: err.message })
        }
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const result = await ClientServiceFactory.getAll();

            res.status(201).json(result);
        } catch (err: any) {
            res.status(400).json({ error: err.messsage });
        }
    }

    findById = async (req: Request, res: Response) => {
        try {
            const { id } = findByIdClientSchema.parse(req.params);

            const result = await ClientServiceFactory.findByIdClient(id);
            res.status(200).json(result);
        } catch (err: any) {
            res.status(401).json({ error: err.message })
        }
    }

    edit = async (req: Request, res: Response) => {
        try {
            const { id } = findByIdClientSchema.parse(req.params);
            const value = clientSchema.parse(req.body);

            const editAttribute = await ClientServiceFactory.edit(id, value);
            res.status(200).json(editAttribute);
        } catch (err: any) {
            res.status(401).json({ error: err.message });
        }
    }
}