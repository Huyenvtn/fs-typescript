import patients from '../../data/patients';
import { NewPatient, NonSSNPatient, Patient } from '../type';
import {v1 as uuid} from 'uuid';
// const patients: Patient[] = patientorData as Patient[]; 
const getEntries = () : Patient[] => {
  return patients;
};

const getNonSSNEntries = () : NonSSNPatient[] => {
  return patients.map(({id, name, dateOfBirth, gender, occupation})=> ({
    id, name, dateOfBirth, gender, occupation
  }));
};
const addPatient = (entry: NewPatient): Patient => {
  const newPatient = {
    id: uuid(),
    ...entry
  };
  patients.push(newPatient);
  return newPatient;
};

export default {
  getEntries,
  getNonSSNEntries,
  addPatient
};