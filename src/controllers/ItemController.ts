import { Request, Response } from "express";
import { ItemId, ItemSchema } from "./schemas/itemSchema.js";
import { itemServiceFactory } from "../factories/ItemServiceFactory.js";

export class ItemController {
    create = async (req: Request, res: Response) => {
        try {
            const value = ItemSchema.parse(req.body);

            const result = await itemServiceFactory.create(value);
            res.status(201).json(result);
        } catch (err: any) {
            res.status(401).json({ error: err.message });
        }
    }

    getbyId = async (req: Request, res: Response) => {
        //TODO implementar o (getById) e create STOCK_ITEM
        try {
            const { id } = ItemId.parse(req.params);

            const result = await itemServiceFactory.getById(id);

            res.status(201).json(result);
        } catch(err: any) {
            res.status(400).json({error: err.message})
        }
    }
}