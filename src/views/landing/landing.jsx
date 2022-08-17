import { Hero } from "./hero"
import { ProductLanding } from './productLanding'
export const Landing = () => {
    return(
        <>
            <div className='h-screen'>
                <Hero />
            </div>
            <ProductLanding />
        </>
    )
}