import { Link } from 'react-router-dom'
import landing from '../../assets/images/hero.jpg'
const style = {
    backgroundImage: `url("${landing}")`,
}

export const Hero = () => {
    return(
    <div className='h-3/4 w-full bg-no-repeat bg-center bg-po bg-cover' style={style}>
        <div className='text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className=' text-6xl font-600'>BUILT TO LAST.</h1>
            <p className='mb-8'>No more particle board or allen keys</p>
            <Link className='rounded-full bg-cyan-500 py-2 px-8' to={'/gallery'}>See our gallery </Link>
        </div>
    </div>
    )
}