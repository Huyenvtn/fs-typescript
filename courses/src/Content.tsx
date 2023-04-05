import Part from './Part';

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartDescription extends CoursePartBase {
  description: string;
}

interface CoursePartBasic extends CoursePartDescription {
  kind: "basic"
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}

interface CoursePartBackground extends CoursePartDescription {
  backgroundMaterial: string;
  kind: "background"
}

interface CoursePartSpecial extends CoursePartDescription {
  requirements: Array<string>;
  kind: "special"
}

type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Content = (props: {courseParts: CoursePart[]}) => {
  return (
    <>
      {props.courseParts.map(item => {
        switch (item.kind) {
          case "basic":
            return <Part key={item.name} name={item.name} exerciseCount={item.exerciseCount} description={item.description} kind={item.kind} />
          case 'group':
            return <Part key={item.name} name={item.name} exerciseCount={item.exerciseCount} groupProjectCount={item.groupProjectCount} kind={item.kind} />
          case 'background':
            return <Part key={item.name} name={item.name} exerciseCount={item.exerciseCount} description={item.description} backgroundMaterial={item.backgroundMaterial} kind={item.kind} />
          case 'special': 
            return <Part key={item.name} name={item.name} exerciseCount={item.exerciseCount} description={item.description} requirements={item.requirements} kind={item.kind} />
          default:
            return assertNever(item);
        }
      })}
    </>    
  )
}

export default Content