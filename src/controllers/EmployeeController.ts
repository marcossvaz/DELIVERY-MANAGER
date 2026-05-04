import { Request, Response } from "express";
import { employeeSchema } from "./schemas/employeeSchema.js";
import { EmployeeServiceFactory } from "../factories/EmployeeServiceFactory.js";

export class EmployeeController {
    async create(req: Request, res: Response) {
        try {
            const value = employeeSchema.parse(req.body);

            const result = EmployeeServiceFactory.create(value);
            res.status(201).json(result);
        } catch (err: any) {
            res.status(401).json({error: err.message});
        }
    }
}