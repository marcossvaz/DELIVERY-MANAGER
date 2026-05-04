import { Request, Response } from "express";
import { employeeFindByRgSchema, employeeSchema } from "./schemas/employeeSchema.js";
import { EmployeeServiceFactory } from "../factories/EmployeeServiceFactory.js";

export class EmployeeController {
    async create(req: Request, res: Response) {
        try {
            const value = employeeSchema.parse(req.body);

            const result = await EmployeeServiceFactory.create(value);
            res.status(200).json(result);
        } catch (err: any) {
            res.status(401).json({error: err.message});
        }
    }

    async findByRg(req: Request, res: Response) {
        try {
            const id = employeeFindByRgSchema.parse(req.params);

            const result = await EmployeeServiceFactory.findByRg(id);
            res.status(200).json(result);
        } catch(err: any) {
            res.status(401).json({error: err.message});
        }
    }
}