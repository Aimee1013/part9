interface Result {
  days: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  targetValue: number;
  averageTime: number;
}

const calculateExercises = (
  dailyHours: number[],
  targetValue: number
): Result => {
  const days = dailyHours.length;
  const trainingDays = dailyHours.filter((hour) => hour > 0).length;
  const averageTime =
    dailyHours.reduce((prev, cur) => prev + cur, 0) / trainingDays;
  console.log("averageTime", averageTime);

  const getRating = (averageTime: number, targetValue: number) => {
    if (averageTime < targetValue) return 1;
    if (averageTime <= targetValue) return 2;
    return 3;
  };

  const getRatingDescription = (rating: number) => {
    if (rating === 1) {
      return "need more excerise";
    }
    if (rating === 2) {
      return "not too bad but could be better";
    }
    if (rating === 3) {
      return "good job";
    }
    return "no rating";
  };

  const success = averageTime >= targetValue;
  const rating = getRating(averageTime, targetValue);
  const ratingDescription = getRatingDescription(rating);

  return {
    days,
    trainingDays,
    success,
    rating,
    ratingDescription,
    targetValue,
    averageTime,
  };
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2.7));
