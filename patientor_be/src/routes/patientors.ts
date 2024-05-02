import express from 'express';
const router = express.Router();
import patientorService from '../services/patientorService';
import patientHelper from '../utils';

router.get('/', (_req, res) => {
  const patients = patientorService.getNonSSNEntries();
  res.json(patients);
});

router.get('/:id', (req, res) => {
  const patient = patientorService.getPatientById(req.params.id);
  res.json(patient);
});

router.post('/', (req, res) => {
  try {
    const newEntry = patientHelper.toNewPatient(req.body);
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

router.post('/:id/entries', (req, res) => {
  try {
    const newEntry = patientHelper.toNewEntry(req.body);
    const addedPatient = patientorService.addEntry(req.params.id, newEntry);
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