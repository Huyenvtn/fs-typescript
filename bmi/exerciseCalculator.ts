interface ExerciseArg {
  hours: Array<number>,
  targetHours: number
}

export const checkArguments = (args: string[], target: string): ExerciseArg => {
  if (args.length <= 0 || !target) throw new Error('Not enough arguments');
  if(isNaN(Number(target)) || Number(target) < 0) throw new Error('Target values were not numbers!');
  const arrOfNum = [];
  for (let i=0; i<args.length; i++) {
    if(isNaN(Number(args[i]))){
      throw new Error('Provided values were not numbers!');
    } else {
      arrOfNum.push(Number(args[i]));
    }
  }
  return {
    hours: arrOfNum,
    targetHours: Number(target)
  };
};
const calculateExercises = (hours: Array<number>, target: number) => {
  const hoursTrain = hours.filter(hour => hour > 0);
  let totalHours = 0;
  for (let i = 0; i < hoursTrain.length; i ++) {
    totalHours += hoursTrain[i];
  }
  const average = hours.length > 0 ? totalHours/hours.length : 0;
  let rating;
  let ratingDescription;
  if (average >= target) {
    rating = 3;
    ratingDescription = 'very good';
  } else if (average > target/2 && average < target) {
    rating = 2;
    ratingDescription = 'not too bad but could be better';
  } else {
    rating = 1;
    ratingDescription = 'bad';
  }
  return {
    periodLength: hours.length,
    trainingDays: hoursTrain.length,
    success: average >= target ? true : false,
    rating:  rating,
    ratingDescription: ratingDescription,
    target: target,
    average: hours.length > 0 ? totalHours/hours.length : 0
  };
};
try {
  const { hours, targetHours } = checkArguments(process.argv.slice(3), process.argv[2]);
  const rs = calculateExercises(hours, targetHours);
  console.log(rs);
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}

export default calculateExercises;
// const time = [3, 0, 2, 4.5, 0, 3, 1];
// calculateExercises(time, 1)