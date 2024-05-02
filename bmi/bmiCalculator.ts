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
  switch (true) {
    case (bmi < 16.0):
      return 'Underweight (Severe thinness)';
    case (bmi >= 16.0 && bmi < 17.0):
      return 'Underweight (Moderate thinness)';
    case (bmi >= 17.0 && bmi < 18.5):
      return 'Underweight (Mild thinness)';
    case (bmi >= 18.5 && bmi < 25.0):
      return 'Normal range';
    case (bmi >= 25.0 && bmi < 30.0):
      return 'Overweight (Pre-obese)';
    case (bmi >= 30.0 && bmi < 35.0):
      return 'Obese (Class I)';
    case (bmi >= 35.0 && bmi < 40.0):
      return 'Obese (Class II)';
    case (bmi >= 40.0):
      return 'Obese (Class III)';
    default:
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