import {Link} from "react-router-dom";

function ProductPreview({product, seeMore}){
    return(
        <>
        <img src={product.image} alt="Product image" />
        <h2>{product.name}</h2>
        {
            seeMore ?
            <p>{product.description}</p> :
            <Link to={'/products/${product.id}'}>Voir Plus</Link>
        }
        </>
    )
}
export default ProductPreview