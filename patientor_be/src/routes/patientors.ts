import express from 'express';
const router = express.Router();
import patientorService from '../services/patientorService';
import {v1 as uuid} from 'uuid';

router.get('/', (_req, res) => {
  const patients = patientorService.getNonSSNEntries();
  res.json(patients);
});

router.post('/', (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;
  const addedPatient = patientorService.addPatient(name, dateOfBirth, ssn, gender, occupation);
  const id = uuid();
  res.json();
});

export default router;