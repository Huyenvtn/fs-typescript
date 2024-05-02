import { useState, SyntheticEvent } from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import {  TextField, InputLabel, MenuItem, Select, Grid, Button, SelectChangeEvent, OutlinedInput, Checkbox, ListItemText, FormControl } from '@mui/material';

import {EntryFormValues, EntryType} from "../../types";
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';

interface Props {
  onCancel: () => void;
  onSubmit: (values: EntryFormValues) => void;
  codes: string[];
}

interface EntryTypeOption{
  value: EntryType;
  label: string;
}

const entryTypeOptions: EntryTypeOption[] = Object.values(EntryType).map(v => ({
  value: v, label: v.toString()
}));

const AddEntryForm = ({ onCancel, onSubmit, codes }: Props) => {
  const [datejs, setDate] = React.useState<Dayjs | null>(dayjs('2022-01-01'));
  const [specialist, setSpecialist] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState(EntryType.Hospital);
  const [diagnoseCodes, setDiagnoseCodes] = React.useState<string[]>([]);
  const [dischargeDate, setDischargeDate] = React.useState<Dayjs | null>(dayjs('2022-01-01'));
  const [dischargeCriteria, setDischargeCriteria] = useState('');
  const [employerName, setEmployerName] = useState('');
  const [sickLeaveStart, setSickLeaveStart] = React.useState<Dayjs | null>(dayjs('2022-01-01'));
  const [sickLeaveEnd, setSickLeaveEnd] = React.useState<Dayjs | null>(dayjs('2022-01-01'));
  const [healthCheckRating, setHealthCheckRating] = useState(0);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  const handleChange = (event: SelectChangeEvent<typeof diagnoseCodes>) => {
    const {
      target: { value },
    } = event;
    setDiagnoseCodes(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const onTypeChange = (event: SelectChangeEvent<string>) => {
    event.preventDefault();
    if ( typeof event.target.value === "string") {
      const value = event.target.value;
      const type = Object.values(EntryType).find(g => g.toString() === value);
      if (type) {
        setType(type);
      }
    }
  };

  const addEntry = (event: SyntheticEvent) => {
    event.preventDefault();
    const date = datejs ? datejs.format('YYYY-MM-DD')  : '';
    if (type === EntryType.Hospital) {
      const discharge = {
        date: dischargeDate ? dischargeDate.format('YYYY-MM-DD')  : '',
        criteria: dischargeCriteria
      };
      onSubmit({
        date,
        specialist,
        description,
        type,
        diagnoseCodes,
        discharge
      });
    } else if (type === EntryType.OccupationalHealthcare) {
      const sickLeave = {
        startDate: sickLeaveStart ? sickLeaveStart.format('YYYY-MM-DD')  : '',
        endDate: sickLeaveEnd ? sickLeaveEnd.format('YYYY-MM-DD')  : ''
      };
      onSubmit({
        date,
        specialist,
        description,
        type,
        diagnoseCodes,
        employerName,
        sickLeave
      });
    } else {
      onSubmit({
        date,
        specialist,
        description,
        type,
        healthCheckRating
      });
    }
  };

  return (
    <div>
      <form onSubmit={addEntry}>
        <InputLabel style={{ marginTop: 20 }}>Entry Type</InputLabel>
        <Select
          variant="standard"
          label="Entry Type"
          fullWidth
          value={type}
          onChange={onTypeChange}
        >
        {entryTypeOptions.map(option =>
          <MenuItem
            key={option.label}
            value={option.value}
          >
            {option.label
          }</MenuItem>
        )}
        </Select>
        <div className='date-format'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Date"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              value={datejs as any}
              onChange={(target) => setDate(target)} />
          </LocalizationProvider>
        </div>
        <div className='date-format'>
          <TextField
            variant="standard"
            label="Specialist"
            fullWidth
            value={specialist}
            onChange={({ target }) => setSpecialist(target.value)}
          />
        </div>
        <div className='date-format'>
          <TextField
            variant="standard"
            label="Description"
            fullWidth
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
        </div>
        {(type === EntryType.Hospital || type === EntryType.OccupationalHealthcare)
        && <div className='date-format'>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={diagnoseCodes}
              onChange={handleChange}
              input={<OutlinedInput label="Diagnose Codes" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {codes.map((code) => (
                <MenuItem key={code} value={code}>
                  <Checkbox checked={diagnoseCodes.indexOf(code) > -1} />
                  <ListItemText primary={code} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>}
        {type === EntryType.Hospital
        && <div className='date-format'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Discharge Date"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              value={dischargeDate as any}
              onChange={(target) => setDischargeDate(target)} />
          </LocalizationProvider>
        </div>}
        {type === EntryType.Hospital
        && <div className='date-format'>
          <TextField
            variant="standard"
            label="Discharge Criteria"
            fullWidth
            value={dischargeCriteria}
            onChange={({ target }) => setDischargeCriteria(target.value)}
          />
        </div>}
        {type === EntryType.OccupationalHealthcare
        && <div className='date-format'>
          <TextField
            variant="standard"
            label="Employer Name"
            fullWidth
            value={employerName}
            onChange={({ target }) => setEmployerName(target.value)}
          />
        </div>}
        {type === EntryType.OccupationalHealthcare
        && <div className='date-format'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Sick Leave Start"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              value={sickLeaveStart as any}
              onChange={(target) => setSickLeaveStart(target)} />
          </LocalizationProvider>
        </div>}
        {type === EntryType.OccupationalHealthcare
        && <div className='date-format'>
           <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Sick Leave End"
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                value={sickLeaveEnd as any}
                onChange={(target) => setSickLeaveEnd(target)} />
            </LocalizationProvider>
        </div>}
        {type === EntryType.HealthCheck
        && <div className='date-format'>
          <TextField
            variant="standard"
            label="Health Check Rating"
            fullWidth
            value={healthCheckRating}
            onChange={({ target }) => setHealthCheckRating(Number(target.value))}
          />
        </div>}
        <Grid container spacing={2} paddingTop={2}>
          <Grid item>
            <Button
              color="error"
              variant="contained"
              style={{ float: "left" }}
              type="button"
              onClick={onCancel}
            > Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{
                float: "right",
              }}
              type="submit"
              variant="contained"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddEntryForm;