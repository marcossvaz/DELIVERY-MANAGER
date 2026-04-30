import { Queue } from 'bullmq';
import dotenv from 'dotenv';


dotenv.config();

const { REDIS_HOST, REDIS_PORT } = process.env;

// DEFINE QUEUE
export const myDeliveryQueue = new Queue('delivery', {
    connection: {
        host: REDIS_HOST,
        port: Number(REDIS_PORT)
    }
});