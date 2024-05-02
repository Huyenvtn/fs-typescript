import diagnoses from '../../data/diagnoses';
import { Diagnose } from '../type';

const getDiagnoses = () : Diagnose[] => {
  return diagnoses;
};

const getDiagnoseByCode = (code: string): Diagnose | undefined => {
  const diagnose = diagnoses.find(d => d.code === code);
  return diagnose;
};

const getDiagnoseCodes = (): Array<string> | undefined => {
  const result = diagnoses.map(a => a.code);
  return result;
};

export default {
  getDiagnoses,
  getDiagnoseByCode,
  getDiagnoseCodes
};