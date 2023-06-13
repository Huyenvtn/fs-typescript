import React from "react";
// import axios from "axios";
// import { Box, Typography } from "@material-ui/core";

// import { PatientFormValues } from "../AddPatientModal/AddPatientForm";
// import AddPatientModal from "../AddPatientModal";
// import { Patient } from "../types";
// import { apiBaseUrl } from "../constants";
// import HealthRatingBar from "../components/HealthRatingBar";
// import { useStateValue } from "../state";
// import { TableCell } from "@material-ui/core";
// import { TableRow } from "@material-ui/core";
// import { TableBody } from "@material-ui/core";
// import { Link } from 'react-router-dom';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { Patient } from '../types';

const PatientPage = (patient: Patient) => {
  // const [{ patients }, dispatch] = useStateValue();

  // const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  // const [error, setError] = React.useState<string>();

  // const openModal = (): void => setModalOpen(true);

  // const closeModal = (): void => {
  //   // setModalOpen(false);
  //   // setError(undefined);
  // };

  // const submitNewPatient = async (values: PatientFormValues) => {
  //   try {
  //     const { data: newPatient } = await axios.post<Patient>(
  //       `${apiBaseUrl}/patients`,
  //       values
  //     );
  //     dispatch({ type: "ADD_PATIENT", payload: newPatient });
  //     closeModal();
  //   } catch (e: unknown) {
  //     if (axios.isAxiosError(e)) {
  //       console.error(e?.response?.data || "Unrecognized axios error");
  //       setError(String(e?.response?.data?.error) || "Unrecognized axios error");
  //     } else {
  //       console.error("Unknown error", e);
  //       setError("Unknown error");
  //     }
  //   }
  // };

  return (
    <div className="App">
      <h1>{patient.name}</h1> {patient.gender === 'female' ? <FemaleIcon /> : <MaleIcon />} 
      <p>ssn: {patient.ssn}</p>
      <p>occupation: {patient.occupation}</p>
    </div>
  );
};

export default PatientPage;
