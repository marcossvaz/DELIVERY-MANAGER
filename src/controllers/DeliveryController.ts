import { Request, Response } from "express";
import { idUpdateSchema, updateSchema } from "./schemas/updateSchema.js";
import { DeliveryServiceFactory } from "../factories/DeliveryServiceFactory.js";
import { Status } from "../models/Status.js";


export class DeliveryController {
    async updateStatus(req: Request, res: Response) {
        try {
            const { id } = idUpdateSchema.parse(req.params);
            const {status} = updateSchema.parse(req.body);

            const result = await DeliveryServiceFactory.updateStatus(id, status as Status)
            res.status(201).json(result)
        } catch (err: any) {
            res.status(401).json({error: err.message})
        }
    }
}

