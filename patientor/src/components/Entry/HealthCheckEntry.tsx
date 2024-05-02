import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../../index.css';
import { Entry } from '../../types';


const HealthCheckEntryItem = ({entry}: {entry: Entry}) => {
  return (
    <div className="border-entry tab">
      <p>{entry.date}<MedicalServicesIcon /></p>
      <p><i>{entry.description}</i></p>
      <p><FavoriteIcon /></p>
      <p>diagnose by {entry.specialist}</p>
    </div> 
  );
};

export default HealthCheckEntryItem;
