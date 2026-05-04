import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();
const pass = process.env.PASS as string;
const saltRounds = 7

export const hashCode = async (password:string): Promise<string> => {
    return bcrypt.hash(pass, saltRounds);
}   