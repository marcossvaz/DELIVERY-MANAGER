import { Request, Response } from "express";
import {OrderSchema} from "../../src/controllers/schemas/orderSchema.js"
import { OrderService } from "../services/OrderService.js";
import { OrderServiceFactory } from "../factories/OrderServiceFactory.js";


export class OrderController {

    create = async (req: Request, res: Response) => {
        try {
            const value = OrderSchema.parse(req.body);

            const result = await  OrderServiceFactory.create(value);
            res.status(200).json(result);
        } catch(err: any) {
            res.status(401).json({error: err.message})
        }
    }
}