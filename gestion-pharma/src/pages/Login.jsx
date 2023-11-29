import {useNavigate} from "react-router-dom";

function Login(){

    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
    }
    return (
        <div>
            <h1>Login Page</h1>
            <button  onClick={() => handleClick("/Products")}>Products</button>
            <button  onClick={() => handleClick("/home")}>Home</button>
        </div>

        );

}
export default Login