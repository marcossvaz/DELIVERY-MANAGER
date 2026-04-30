import { Worker } from 'bullmq'

export const deliveryWorker = new Worker('delivery', async (job) => {
    const { delivery_id, status} = job.data;

}, {
    connection: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT)
    }
})