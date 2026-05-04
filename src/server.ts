import { app } from "./index.js";
import dotenv from 'dotenv';
import { routes } from "./routes/routes.js";
import { deliveryWorker } from "./lib/deliveryWorker.js";

dotenv.config();

const port = process.env.PORT;

app.use(routes)
app.listen(port, () => {
    console.log("Serve is running....🚀🚀🚀")
})


deliveryWorker.on('completed', (job) => {
    console.log(`Job: ${job.id} concluido`)
})

deliveryWorker.on('failed', (job, err) => {
    console.error(`job: ${job?.id} falhou`, err.message)
})