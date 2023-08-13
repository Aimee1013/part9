import express from "express";
import diagnoseRouter from "./src/routes/disgnoses";
import patientRouter from "./src/routes/patients";

const app = express();
app.use(express.json());

const PORT = 3001;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pingpong-ping");
});

// app.get("/api/patients", (_req, res) => {
//   console.log("patients here");
//   res.send("pingpong-patients");
// });

app.use("/api/patients", patientRouter);
app.use("/api/diagnoses", diagnoseRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
