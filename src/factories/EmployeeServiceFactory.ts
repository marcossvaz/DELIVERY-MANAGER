import { EmployeeService } from "../services/EmployeeService.js";
import { EmployeeRepositoryFactory } from "./EmployeeRepositoryFactory.js";

export const EmployeeServiceFactory = new EmployeeService(EmployeeRepositoryFactory); 