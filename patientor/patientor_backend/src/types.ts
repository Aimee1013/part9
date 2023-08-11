export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}
export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: Gender;
  occupation: string;
}

export type NoSentivePatient = Omit<Patient, "ssn">;
export type NewPatient = Omit<Patient, "id">;