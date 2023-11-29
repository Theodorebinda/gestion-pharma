import ProductPrevieuw from '../components/productPreview.jsx';
import ProductService from '../models/services/ProductService.js';


function ProductsList() {
    const data = ProductService.getProducts();
    return (
        <>
            <ul>
                {
                    data.map((product) =>
                        <li key={product.id}>
                            <ProductPrevieuw product={product} seeMore={false}></ProductPrevieuw>
                        </li>)
                }
            </ul>
        </>
    )
}
export default ProductsList







