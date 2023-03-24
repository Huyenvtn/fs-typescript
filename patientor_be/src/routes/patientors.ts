import express from 'express';
const router = express.Router();
import patientorService from '../services/patientorService';
import toNewPatient from '../utils';

router.get('/', (_req, res) => {
  const patients = patientorService.getNonSSNEntries();
  res.json(patients);
});

router.post('/', (req, res) => {
  try {
    const newEntry = toNewPatient(req.body);
    const addedPatient = patientorService.addPatient(newEntry);
    res.json(addedPatient);
  } catch (error) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;