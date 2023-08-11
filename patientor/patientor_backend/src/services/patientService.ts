import data from "../../data/patient";
// import { NoSentivePatient, NewPatient } from "../types";
import { v1 as uuid } from "uuid";

const getPatients = () => {
  return data;
};

const id = uuid();

const addPatient = (
  name: string,
  dateofbirth: string,
  gender: string,
  occupation: string
) => {
  const newPatientEntry = {
    id: uuid(),
    name,
    dateofbirth,
    gender,
    occupation,
  };

  data.push(newPatientEntry);
  return newPatientEntry;
};

export default { getPatients, addPatient };
