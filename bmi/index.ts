import express from 'express';
import calculateBmi, { checkBMIArguments } from './bmiCalculator';
import calculateExercises, { checkArguments } from './exerciseCalculator';
const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  try {
    const { height, weight } = checkBMIArguments(req.query.height as string, req.query.weight as string);
    const obj = {
      weight: weight,
      height: height,
      bmi: calculateBmi(height, weight)
    };
    res.send(obj);
  } catch (error: unknown) {
    let errorMessage = 'malformatted parameters.';
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.send(errorMessage);
  }
});

app.post('/exercises', (req, res)=> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const { hours, targetHours } = checkArguments(daily_exercises, target);
    const rs = calculateExercises(hours, targetHours);
    res.send(rs);
  } catch (error: unknown) {
    let errorMessage = 'parameters missing. ';
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.send(errorMessage);
  }
});

const PORT = 3002;

app.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}`);
});