
import cuttingBoard from '../../assets/images/cuttingBoardCircle.png'
import wineRack from '../../assets/images/wineRackCircle.png'
import shelf from '../../assets/images/floatingShelfCircle.png'
import { ProductLandingItem } from './productLandingItem'

export const ProductLanding = () => {
    return(
        // width: auto;
        // margin: auto;
        // max-width: 1020px;
        // padding: 96px 32px;
        <div className='max-w-6xl m-auto w-auto px-9'>
            <div>
                lorem ipsum
            </div>
            <ProductLandingItem imgSource={cuttingBoard} title='Cutting Boards'/>
            <ProductLandingItem imgSource={wineRack} title='Furniture' reverse={true} />
            <ProductLandingItem imgSource={shelf} title="Shelving" />
        </div>
    )
}