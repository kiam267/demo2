import {NavLink} from 'react-router-dom'

export default function Nav() {
  return (
     <>
         <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>contact</NavLink>
     </>
  )
}
