import { Request, Response } from "express";
import { AddItemInOrder, ItemId, ItemSchema, orderById } from "./schemas/itemSchema.js";
import { itemServiceFactory } from "../factories/ItemServiceFactory.js";
import { OrderServiceFactory } from "../factories/OrderServiceFactory.js";

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
        try {
            const { id } = ItemId.parse(req.params);

            const result = await itemServiceFactory.getById(id);

            res.status(201).json(result);
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    }

    addItemOrder = async (req: Request, res: Response) => {
        try {
            const value = AddItemInOrder.parse(req.body);
            const { id } = orderById.parse(req.params);


            const result = await OrderServiceFactory.addItemInOrder(value, id);
            res.status(201).json(result);
        } catch (err: any) {
            res.status(401).json({ error: err.message });
        }

    }

}