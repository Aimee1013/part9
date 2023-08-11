export type Operation_mul = "multiply" | "add" | "divide";

const multiplicator_mul = (aa: number, bb: number, printText: any) => {
  console.log(printText, aa * bb);
};

const aa: number = Number(process.argv[2]);
const bb: number = Number(process.argv[3]);

multiplicator_mul(aa, bb, `Multiplied ${aa} and ${bb}, the result is:`);

export const calculator_mul = (
  aa: number,
  bb: number,
  op: Operation_mul
): number | string => {
  switch (op) {
    case "multiply":
      return aa * bb;
    case "add":
      return aa + bb;
    case "divide":
      if (bb === 0) return "can't divide by 0!";
      return aa / bb;
    default:
      throw new Error("Operation is not multiply, add or divide!");
  }
};

try {
  console.log(calculator_mul(1, 8, "divide"));
} catch (error: unknown) {
  let errorMessage = "something went wrong";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}

console.log(process.argv);
