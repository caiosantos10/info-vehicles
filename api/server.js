import "dotenv/config.js";
import express from 'express';
import cors from 'cors';
import connectOnDatabase from './config/db_config.js';
import router from './routes/vehiclesRoutes.js';

const connection = await connectOnDatabase();

connection.on("error", (error) => {
  console.error("Connection Error", error);
});

connection.once("open", () => {
  console.log("Connected to Database");
});

const app = express();

app.use(cors());

app.use(express.json());

const routes = router;

app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log('Server is running on 3000');
});

export default app;