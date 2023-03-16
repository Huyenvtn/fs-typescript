import express from "express";
import cors from "cors";
import patientorRouter from './routes/patientors';
const app = express();
app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
const PORT = 3000;


app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/patients', patientorRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});