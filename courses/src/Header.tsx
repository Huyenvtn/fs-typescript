interface headerProps {
  courseName: string
}

const Header = (props: headerProps) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

export default Header