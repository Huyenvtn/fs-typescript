import express from 'express';
const router = express.Router();
import diagnoseService from '../services/diagnoseService';

router.get('/', (_req, res) => {
  const diagnoses = diagnoseService.getDiagnoses();
  res.json(diagnoses);
});

router.get('/codes', (_req, res) => {
  const codes = diagnoseService.getDiagnoseCodes();
  res.json(codes);
});

router.get('/:id', (req, res) => {
  const diagnose = diagnoseService.getDiagnoseByCode(req.params.id);
  res.json(diagnose);
});

export default router;