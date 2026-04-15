import { app } from "./index.js";
import dotenv from 'dotenv';
import { routes } from "./routes/routes.js";

dotenv.config();
const port = process.env.PORT

app.use(routes)
app.listen(port, () => {
    console.log("Serve is running....🚀🚀🚀")
})