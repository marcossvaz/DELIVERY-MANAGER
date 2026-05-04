import { Employee } from "../models/Employee.js";
import { EmployeeRepository } from "../repository/EmployeeRepository.js";


export class EmployeeService {

    constructor(private readonly employeeRepository: EmployeeRepository) {}

    async create(data: Employee) {

    }

    async findByRg(data: {rg: string}) {
        const employee = await this.employeeRepository.findByRg(data.rg);

        return employee
    }
}