import { useParams } from "react-router-dom";
import ProductService from "../models/services/ProductService";
import ProductPreview from "../components/productPreview";
import NavBar from "../components/navigation"

function SingleProduct() {
    const {id} = useParams();
    const data = ProductService.getProducts();
    const product = data.find((e) => e.id === id);
    return (
        <>
             <nav>
                <NavBar />
            </nav>
            <div>
                <ProductPreview product={product} seeMore={true}></ProductPreview>
            </div>
            
        </>
    )
}
export default SingleProduct;