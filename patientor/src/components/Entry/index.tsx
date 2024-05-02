import '../../index.css';
import { Entry, EntryType } from '../../types';
import HospitalEntryItem from './HospitalEntry';
import HealthCheckEntryItem from './HealthCheckEntry';
import OccupationalHealthcareEntryItem from './OccupationalHealthcareEntry';

const assertNever = (entry: Entry): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(entry)}`
  );
};

const EntryItem: React.FC<{entry: Entry}> = ({entry}) => {
  switch (entry.type) {
    case EntryType.Hospital: 
      return <HospitalEntryItem entry={entry} />;
    case EntryType.OccupationalHealthcare: 
      return <OccupationalHealthcareEntryItem entry={entry} />;
    case EntryType.HealthCheck: 
      return <HealthCheckEntryItem entry={entry} />;
    default:
      return assertNever(entry);
  }
};

export default EntryItem;

