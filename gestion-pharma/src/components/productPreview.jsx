import {Link} from "react-router-dom";
import ProductsList from "../pages/productList.jsx"

function ProductPreview({product, seeMore}){

    return(
        <div>
            <img src={product.image} alt="Product image" />
            <h2>{product.name}</h2>
            {
                seeMore ?
                <p> {product.description} </p>
                :
                <Link to={`/products/${product.id}`}>Voir Plus</Link>
            }
        </div>
    )
}
export default ProductPreview;








