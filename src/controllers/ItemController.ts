import { Request, Response } from "express";
import { ItemSchema } from "./schemas/itemSchema.js";
import { itemServiceFactory } from "../factories/ItemServiceFactory.js";

export class ItemController {
    create = async (req: Request, res: Response) => {
        try {
            const value = ItemSchema.parse(req.body);

            const result = await itemServiceFactory.create(value);
            res.status(201).json(result);
        } catch (err: any) {
            res.status(401).json({error: err.message});
        }
    }
}