import express from "express";
const app = express();

import { calculateBmi } from "./bmiCalculator";
import { calculator_mul, Operation_mul } from "./multiplier";

//localhost:3003/bmi?height=180&weight=75

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;
  const validParameters: boolean =
    !isNaN(Number(height)) && !isNaN(Number(weight));

  const bmi = calculateBmi(Number(height), Number(weight));

  if (!validParameters || !weight || !height) {
    res.status(400).send({ error: "malformatted parameters" });
  }

  res.send({ height, weight, bmi });
});

app.post("/calculate", (req, res) => {
  const { aa, bb, op } = req.body;

  console.log("aa", aa);

  const operation = op as Operation_mul;

  const result = calculator_mul(Number(aa), Number(bb), operation);
  res.send({ result });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
