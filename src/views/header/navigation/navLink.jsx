import { Link } from "react-router-dom"

export const NavLink = (props) => {
    return(
        <li className='nav-item p-2 uppercase'>
            <Link to={props.destination}>{props.text}</Link>
        </li>
    )
} 