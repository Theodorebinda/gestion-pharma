import ProductPreview from '../components/productPreview';
import ProductService from '../models/services/ProductService';

function ProductsList(){
    return (
        <>
            <ul>
                {
                    data.map((e) =>
                        <li>
                            <ProductPreview product ={e} seeMore = {false}></ProductPreview>
                        </li>
                    )
                }
            </ul>
        </>
    )
}
export default ProductsList
