import axios from "axios";
import { Diagnose } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<Diagnose[]>(
    `${apiBaseUrl}/diagnoses`
  );

  return data;
};

const getCodes = async () => {
  const { data } = await axios.get<Array<Diagnose['code']>>(
    `${apiBaseUrl}/diagnoses/codes`
  );

  return data;
};

const getByCode = async (id : string): Promise<Diagnose> => {
  const response = await axios.get<Diagnose>(
    `${apiBaseUrl}/diagnoses/${id}`
  );
  return response.data;
};

export default {
  getAll, getByCode, getCodes
};

