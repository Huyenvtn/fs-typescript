export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}
export interface Discharge {
  date: string,
  criteria: string
}
export interface SickLeave {
  startDate: string,
  endDate: string
}

export enum EntryType {
  Hospital = 'Hospital',
  OccupationalHealthcare = 'OccupationalHealthcare',
  HealthCheck = 'HealthCheck'
}
export interface BasicEntry {
  id: string,
  date: string,
  specialist: string,
  description: string,
  // type: EntryType,
}
export interface HospitalEntry extends BasicEntry {
  diagnoseCodes: Array<Diagnose["code"]>,
  discharge: Discharge
  type: EntryType.Hospital
}
export interface OccupationalHealthcareEntry extends BasicEntry {
  employerName: string,
  diagnoseCodes: Array<Diagnose["code"]>,
  sickLeave: SickLeave,
  type: EntryType.OccupationalHealthcare
}
export interface HealthCheckEntry extends BasicEntry {
  healthCheckRating: number,
  type: EntryType.HealthCheck
}

export type Entry = OccupationalHealthcareEntry | HospitalEntry | HealthCheckEntry;

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries: Array<Entry>
}

export type PatientFormValues = Omit<Patient, "id" | "entries">;

type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;

export type EntryFormValues = UnionOmit<Entry, 'id'>;