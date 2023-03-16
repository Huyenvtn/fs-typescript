export type Gender = 'male' | 'female' | 'other';
export interface Patient {
  id: string,
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: Gender,
  occupation: string
}
export interface Diagnose {
  code: string,
  name: string,
  latin?: string
}
export type NonSSNPatient = Omit<Patient, 'ssn'>;