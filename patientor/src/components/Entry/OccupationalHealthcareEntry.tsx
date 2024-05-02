import WorkIcon from '@mui/icons-material/Work';
import '../../index.css';
import {OccupationalHealthcareEntry } from '../../types';
import DiagnoseItem from '../Diagnose';


const OccupationalHealthcareEntryItem = ({entry}: {entry: OccupationalHealthcareEntry}) => {
  return (
    <div className="border-entry">
      <p className="tab">
        {entry.date}<WorkIcon color="action"/> {entry.employerName}
      </p>
      <p className="tab">
        <i>{entry.description}</i>
      </p>
      <p className="tab">
        diagnose by {entry.specialist}
      </p>
      <ul style={{ listStyleType: 'disc' }}>
        {entry.diagnoseCodes && entry.diagnoseCodes.map((code) => (
          <DiagnoseItem key={code} code={code}/>
        ))}
      </ul>
    </div> 
  );
};

export default OccupationalHealthcareEntryItem;
