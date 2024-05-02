import {
  NewPatient,
  Gender,
  Entry,
  NewEntry,
  EntryType,
  Diagnose,
  SickLeave,
  Discharge
} from './type';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isNumber = (text: unknown): text is number => {
  return typeof text === 'number' || text instanceof Number;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isGender = (gender: string): gender is Gender => {
  return Object.values(Gender).map(g => g.toString()).includes(gender);
};

const isEntries = (_entries: object): _entries is Entry[] => {
  return true;
};

const isEntryType = (type: string): type is EntryType => {
  return Object.values(EntryType).map(g => g.toString()).includes(type);
}

const parseEntryType = (type: unknown): EntryType => {
  if (!type || !isString(type) || !isEntryType(type)) {
    throw new Error('Incorrect or missing entry type');
  }
  return type;
};

const parseString = (attr: unknown): string => {
  if (!attr || !isString(attr)) {
    throw new Error('Incorrect or missing specialist or description or employerName');
  }
  return attr;
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name');
  }
  return name;
};

const parseSSN = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error('Incorrect or missing ssn');
  }
  return ssn;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error('Incorrect or missing occupation');
  }
  return occupation;
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect or missing gender');
  }
  return gender;
};

const parseDiagnoseCodes = (codes: unknown): Array<Diagnose["code"]> => {
  return codes as Array<Diagnose['code']>;
};

const parseDischarge = (object: unknown): Discharge => {
  if (!object || typeof object !=='object' || !('date' in object)|| !('criteria' in object)) {
    throw new Error('Incorrect or missing discharge');
  }
  return object as Discharge;
};

const parseSickLeave = (sickLeave: unknown): SickLeave => {
  if (!sickLeave || typeof sickLeave !=='object' || !('startDate' in sickLeave)|| !('endDate' in sickLeave)) {
    throw new Error('Incorrect or missing sickleave');
  }
  return sickLeave as SickLeave;
};

const parseHealthCheckRating = (rating: unknown): number => {
  if (!isNumber(rating)) {
    throw new Error('Incorrect or missing health check rating');
  }
  if (rating > 5) {
    throw new Error('Value of HealthCheckRating incorrect: ' + rating);
  }
  return rating;
};

const parseEntries = (entries: unknown): Entry[] => {
  if (!entries || !isEntries(entries)) {
    throw new Error('Incorrect or missing entries');
  }
  return entries;
};

const toNewPatient = (object: unknown): NewPatient => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }
  if ('name' in object && 'dateOfBirth' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object && 'entries' in object) {
    const newEntry : NewPatient = {
      name: parseName(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseSSN(object.ssn),
      gender: parseGender(object.gender),
      entries: parseEntries(object.entries),
      occupation: parseOccupation(object.occupation)
    };
    return newEntry;
  }
  throw new Error('Incorrect data: a field missing');
};

const toNewEntry = (object: unknown): NewEntry => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }
  if ('type' in object && 'date' in object && 'specialist' in object && 'description' in object) {
    switch (object.type) {
      case 'Hospital':
        if ('diagnoseCodes' in object && 'discharge' in object) {
          const newEntry : NewEntry = {
            date: parseDate(object.date),
            specialist: parseString(object.specialist),
            description: parseString(object.description),
            type: parseEntryType(object.type),
            diagnoseCodes: parseDiagnoseCodes(object.diagnoseCodes),
            discharge: parseDischarge(object.discharge)
          };
          return newEntry;
        }
        throw new Error('Incorrect data: a field missing');
      case 'OccupationalHealthcare':
        if ('diagnoseCodes' in object && 'sickLeave' in object && 'employerName' in object) {
          const newEntry : NewEntry = {
            date: parseDate(object.date),
            specialist: parseString(object.specialist),
            description: parseString(object.description),
            type: parseEntryType(object.type),
            employerName: parseString(object.employerName),
            diagnoseCodes: parseDiagnoseCodes(object.diagnoseCodes),
            sickLeave: parseSickLeave(object.sickLeave)
          };
          return newEntry;
        }
        throw new Error('Incorrect data: a field missingne');
      case 'HealthCheck': 
        if ('healthCheckRating' in object) {
          const newEntry : NewEntry = {
            date: parseDate(object.date),
            specialist: parseString(object.specialist),
            description: parseString(object.description),
            type: parseEntryType(object.type),
            healthCheckRating: parseHealthCheckRating(object.healthCheckRating)
          };
          return newEntry;
        }
        throw new Error('Incorrect data: a field missing');
      default:
        throw new Error('Incorrect data: a field missing');
    }
  }
  throw new Error('Incorrect data: a field missing');
};

const funcs = {
  toNewPatient,
  toNewEntry
}

export default funcs;
