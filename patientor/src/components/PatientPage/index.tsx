import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { Diagnose, Entry, EntryFormValues, Patient } from '../../types';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import patientService from '../../services/patients';
import EntryItem from '../Entry';
import { Alert, Button } from '@mui/material';
import axios from 'axios';
import AddEntryForm from '../AddEntryModal/AddEntryForm';
import diagnoses from '../../services/diagnoses';

const PatientPage = () => {
  const [patient, setPatient] = useState<Patient>();
  const [codes, setCodes] = useState<Array<Diagnose['code']>>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const { id } = useParams();

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  const submitNewEntry = async (values: EntryFormValues) => {
    setError(undefined);
    try {
      if (id) {
        const patient = await patientService.createEntry(id, values);
        setPatient(patient);
        setModalOpen(false);
      }
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        if (e?.response?.data && typeof e?.response?.data === "string") {
          const message = e.response.data.replace('Something went wrong. Error: ', '');
          console.error(message);
          setError(message);
        } else {
          setError("Unrecognized axios error");
        }
      } else {
        console.error("Unknown error", e);
        setError("Unknown error");
      }
    }
  };

  useEffect(() => {
    const fetchPatientListt = async () => {
      if (id) {
        const patientt = await patientService.getById(id);
        console.log('patient', patientt);
        setPatient(patientt);
        const codeList = await diagnoses.getCodes();
        setCodes(codeList);
      }
    };
    void fetchPatientListt();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    patient && 
    <div className="App">
      <h6>
        {patient.name} 
        {patient.gender === 'female' && <FemaleIcon />}
        {patient.gender === 'male' && <MaleIcon />}
      </h6>
      <p>ssn: {patient.ssn}</p>
      <p>occupation: {patient.occupation}</p>
      <p>date of birth: {patient.dateOfBirth}</p>
      {error && <Alert severity="error">{error}</Alert>}
      {modalOpen && 
        <AddEntryForm
          onSubmit={submitNewEntry}
          onCancel={closeModal}
          codes={codes}
        />}
      {!modalOpen && 
        <Button variant="contained" onClick={() => openModal()}>
          Add New Entry
        </Button>}
      
      {patient.entries.length> 0 && <p>entries: </p>}
      {Object.values(patient.entries).map((entry: Entry) => (
        <EntryItem key={entry.id} entry={entry} />
          ))}
    </div>
  );
};

export default PatientPage;
