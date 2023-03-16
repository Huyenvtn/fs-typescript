import patients from '../../data/patients';
import { NonSSNPatient, Patient } from '../type';
// const patients: Patient[] = patientorData as Patient[]; 
const getEntries = () : Patient[] => {
  return patients;
};

const getNonSSNEntries = () : NonSSNPatient[] => {
  return patients.map(({id, name, dateOfBirth, gender, occupation})=> ({
    id, name, dateOfBirth, gender, occupation
  }));
};
const addPatientor = () => {
  return null;
};

export default {
  getEntries,
  getNonSSNEntries,
  addPatientor
};