import { Diagnose } from '../../types';
import { useEffect, useState } from 'react';
import diagnoseService from '../../services/diagnoses';

interface Props {
  code: string
}

const DiagnoseItem = ({ code }: Props) => {
  const [diagnose, setDiagnose] = useState<Diagnose>();

  useEffect(() => {
    const fetchPatientListt = async () => {
      if (code) {
        const existedDiagnose = await diagnoseService.getByCode(code);
        setDiagnose(existedDiagnose);
      }
    };
    void fetchPatientListt();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    diagnose && 
    <li>{diagnose.code} {diagnose.name}</li>
  );
};

export default DiagnoseItem;
