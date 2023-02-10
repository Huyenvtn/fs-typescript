interface BMIArg {
  height: number,
  weight: number
}

export const checkBMIArguments = (arg1: string, agr2: string): BMIArg => {
  if (!arg1 || !agr2) throw new Error('Not enough arguments');
  if(!isNaN(Number(arg1)) && !isNaN(Number(agr2))){
    return {
      height: Number(arg1),
      weight: Number(agr2)
    };
  } else throw new Error('Provided values were not numbers!');
};

const calculateBmi = (height: number, weight: number): string => {
  if (height <= 0) {
    return 'Wrong height';
  }
  const bmi = weight/Math.pow((height/100), 2);
  if (bmi < 16.0) {
    return 'Underweight (Severe thinness)';
  } else if (bmi >= 16.0 && bmi <= 16.9) {
    return 'Underweight (Moderate thinness)';
  } else if (bmi >= 17.0 && bmi <= 18.4) {
    return 'Underweight (Mild thinness)';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'Normal range';
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return 'Overweight (Pre-obese)';
  } else if (bmi >= 30.0 && bmi <= 34.9) {
    return 'Obese (Class I)';
  } else if (bmi >= 35.0 && bmi <= 39.9) {
    return 'Obese (Class II)';
  } else if (bmi >= 40.0) {
    return 'Obese (Class III)';
  } else {
    return 'Wrong input';
  }
};

try {
  const { height, weight } = checkBMIArguments(process.argv[2], process.argv[3]);
  const rs = calculateBmi(height, weight);
  console.log(rs);
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
// calculateBmi(180,174)
export default calculateBmi;