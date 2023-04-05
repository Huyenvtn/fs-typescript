interface contentProps {
  name: string,
  exerciseCount: number
}

const Total = (props: {courseParts: contentProps[]}) => {
  return (
    <p>
      Number of exercises{" "}
      {props.courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  )
}

export default Total