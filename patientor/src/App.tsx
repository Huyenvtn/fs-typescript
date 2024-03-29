import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes, useMatch } from "react-router-dom";
import { Button, Divider, Container } from "@material-ui/core";

import { apiBaseUrl } from "./constants";
import { useStateValue } from "./state";
import { Patient } from "./types";

import PatientListPage from "./PatientListPage";
import PatientPage from './PatientPage';
import { Typography } from "@material-ui/core";

const App = () => {
  // const [, dispatch] = useStateValue();
  const [patients, dispatch] = useStateValue();
  React.useEffect(() => {
    void axios.get<void>(`${apiBaseUrl}/ping`);

    const fetchPatientList = async () => {
      try {
        const { data: patientListFromApi } = await axios.get<Patient[]>(
          `${apiBaseUrl}/patients`
        );
        dispatch({ type: "SET_PATIENT_LIST", payload: patientListFromApi });
      } catch (e) {
        console.error(e);
      }
    };
    void fetchPatientList();
  }, [dispatch]);

  const matchID = useMatch('/patients/:id');

  return (
    <div className="App">
      <Router>
        <Container>
          <Typography variant="h3" style={{ marginBottom: "0.5em" }}>
            Patientor
          </Typography>
          <Button component={Link} to="/" variant="contained" color="primary">
            Home
          </Button>
          <Divider hidden />
          <Routes>
            <Route path="/" element={<PatientListPage />} />
            { matchID && 
              <Route path='/patients/:id' element={
                <PatientPage patient={patients.find(item => item.id === matchID.params.id)}/>}
              />}
            
          </Routes>
        </Container>
      </Router>
    </div>
  );
};

export default App;
