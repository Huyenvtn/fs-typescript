import patients from '../../data/patients';
import { NewEntry, NewPatient, NonSSNPatient, Patient } from '../type';
import {v1 as uuid} from 'uuid';
const getEntries = () : Patient[] => {
  return patients;
};

const getNonSSNEntries = () : NonSSNPatient[] => {
  return patients.map(({id, name, dateOfBirth, gender, occupation})=> ({
    id, name, dateOfBirth, gender, occupation
  }));
};

const getPatientById = (id: string): Patient | undefined => {
  const entry = patients.find(d => d.id === id);
  return entry;
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id: uuid(),
    ...patient
  };
  patients.push(newPatient);
  return newPatient;
};

const addEntry = (id: string, entry: NewEntry): Patient => {
  const newEntry = {
    id: uuid(),
    ...entry
  };
  const patient = getPatientById(id);
  if (!patient) {
    throw new Error('Can not found patient with id ' + id);
  }
  patients.map(p =>
    p.id === patient.id
      ? { ...p, entries: p.entries.push(newEntry) }
      : p
  );
  return patient;
};

export default {
  getEntries,
  getNonSSNEntries,
  getPatientById,
  addPatient,
  addEntry
};