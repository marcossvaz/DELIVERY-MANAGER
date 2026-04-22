import { Request, Response } from "express";
import { OrderById, OrderSchema } from "../../src/controllers/schemas/orderSchema.js"
import { OrderServiceFactory } from "../factories/OrderServiceFactory.js";


export class OrderController {

    create = async (req: Request, res: Response) => {
        try {
            const value = OrderSchema.parse(req.body);

            const result = await OrderServiceFactory.create(value);
            res.status(200).json(result);
        } catch (err: any) {
            res.status(401).json({ error: err.message })
        }
    }

    //TODO continuar emplementar o projeto, agora pegar por ID E criar de gerador de SKU
    findbyId = async (req: Request, res: Response) => {
        try {
            const { id } = OrderById.parse(req.params);

            const value = await OrderServiceFactory.findById(id);
            res.status(200).json(value);
        } catch(err: any) {
            res.status(400).json({error: err.message});
        }
    }
}