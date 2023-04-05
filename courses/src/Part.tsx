interface partProps {
  name: string,
  exerciseCount: number,
  description?: string,
  kind: string,
  groupProjectCount?: number,
  backgroundMaterial?: string,
  requirements?: Array<string>
}

const Part = (props: partProps) => {
  return (
    <div>
      <br />
      <b>{props.name} {props.exerciseCount}</b>
      {props.description && <p><i>{props.description}</i></p>}
      {props.groupProjectCount && <p>project exercises {props.groupProjectCount}</p>}
      {props.backgroundMaterial && <p>submit to {props.backgroundMaterial}</p>}
      {props.requirements && <p>required skills: {props.requirements.toString()}</p>}
    </div>
  )
}

export default Part