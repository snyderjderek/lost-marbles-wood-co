import { NavLink } from "./navLink"

export const Navigation = () => {
    return(
            <ul className='flex flex-row list-style-none'>
                <NavLink destination={'about'} text={'about'} />
                <NavLink destination={'contact'} text={'contact'} />
                <NavLink destination={'gallery'} text={'gallery'} />
                <NavLink destination={'care'} text={'care'} />
            </ul>       
    )
}