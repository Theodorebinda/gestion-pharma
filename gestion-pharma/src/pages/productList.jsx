import ProductPrevieuw from '../components/productPreview.jsx';
import ProductService from '../models/services/ProductService.js';
import NavBar from "../components/navigation"


function ProductsList() {
    const data = ProductService.getProducts();
    return (
        <>
             <nav>
                <NavBar />
            </nav>
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







