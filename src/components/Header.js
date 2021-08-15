import { NavLink } from "react-router-dom"

const Header = (props) => {


  return (
    <header className='header'>
      <nav>
        <p>About</p>
        <p>Skills</p>
        <p>Project</p>
        <p>Contact</p>
      </nav>
    </header>
  )
}

export default Header