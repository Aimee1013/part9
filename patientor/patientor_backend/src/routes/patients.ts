import express from "express";
import patientService from "../services/patientService";
// import toNewPatient from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  // res.send("Fetching all diaries!");
  res.send(patientService.getNonSensitivePatients());
});

router.get("/:id", (req, res) => {
  const patient = patientService.findById(String(req.params.id));

  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;
  const addedPatient = patientService.addPatient(name, dateOfBirth, ssn, gender, occupation);
  res.json(addedPatient);
});

// router.post("/", (req, res) => {
//   try {
//     const newPatientEntry = toNewPatient(req.body);
//     console.log("newPatientEntry", newPatientEntry);

//     const addedPatient = patientService.addPatient(newPatientEntry);
//     res.json(addedPatient);
//   } catch (error: unknown) {
//     let errorMessage = "Something went wrong";
//     if (error instanceof Error) {
//       errorMessage += "Error:" + error.message;
//     }
//     res.status(400).send(errorMessage);
//   }
// });

export default router;
