import express from 'express';
const router = express.Router();
import patientorService from '../services/patientorService';

router.get('/', (_req, res) => {
  const patients = patientorService.getNonSSNEntries();
  res.json(patients);
});



export default router;