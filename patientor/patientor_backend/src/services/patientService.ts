import patientsData from "../../data/patients";
import { Patient } from "../types";
import { NoSentivePatient, Gender, NewPatient } from "../types";
import { v1 as uuid } from "uuid";

const getPatients = (): Array<Patient> => {
  console.log("patientdata", patientsData);
  return patientsData;
};

const getNonSensitivePatients = (): Array<NoSentivePatient> => {
  return patientsData.map((patient) => ({
    id: patient.id,
    name: patient.name,
    dateOfBirth: patient.dateOfBirth,
    gender: patient.gender,
    occupation: patient.occupation
  }));
};

const addPatient = (name: string, dateOfBirth: string, ssn: string, gender: Gender, occupation: string): NewPatient => {
  const id = uuid();
  const newPatientEntry = {
    id,
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation
  };

  patientsData.push(newPatientEntry);
  return newPatientEntry;
};

// const addPatient = (patient: NewPatient): Patient => {
//   const id = uuid();
//   const newPatient = { id, ...patient };
//   patientsData.push(newPatient);
//   return newPatient;
// };

const findById = (id: string): Patient | undefined => {
  const entry = patientsData.find((p) => p.id === id);
  return entry;
};

export default { getPatients, getNonSensitivePatients, addPatient, findById };
