interface CalculateBmiValues {
  height: number;
  weight: number;
}

const args = process.argv;
console.log("bmiargs", args);

const parseArgs = (args: string[]): CalculateBmiValues => {
  if (args.length < 4) throw new Error("not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

export const calculateBmi = (height: number, weight: number): string => {
  const op = weight / (height / 100) ** 2;

  if (op < 13) {
    return "bad (bad weight)";
  }
  if (op < 25) {
    return "Normal (healthy weight)";
  }
  if (op < 38) {
    return "control (unhealthy weight)";
  }
  return "see a doctor";
};

// console.log(calculateBmi(180, 74));
console.log("process", process.argv);
const { height, weight } = parseArgs(process.argv);
console.log(calculateBmi(height, weight));
