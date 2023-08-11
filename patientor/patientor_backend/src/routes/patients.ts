import express from "express";
import patientService from "../services/patientService";

const router = express.Router();

router.get("/", (_req, res) => {
  // res.send("Fetching all diaries!");
  res.send(patientService.getPatients());
});

router.post("/", (req, res) => {
  const { name, dateofbirth, gender, occupation } = req.body;
  const addedPatient = patientService.addPatient(
    name,
    dateofbirth,
    gender,
    occupation
  );
  res.json(addedPatient);
});

export default router;
