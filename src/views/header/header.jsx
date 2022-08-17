import { Navigation } from "./navigation/navigation"
import logo from '../../assets/images/logo/Logo.png'


export const Header = () => {

    return(
        <header className='flex justify-between items-center p-2' >
            <img className='p-3 h-20' src={logo} alt='logo'/>
            <Navigation />            
        </header>
    )
}