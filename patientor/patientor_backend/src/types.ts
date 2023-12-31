export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}
export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

export interface Entry {}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  // entries: Entry[];
}

export type NoSentivePatient = Omit<Patient, "ssn">;
// export type NoSentivePatient = Omit<Patient, "ssn" | "entries">;

export type NewPatient = Omit<Patient, "id">;
