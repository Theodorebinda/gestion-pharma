import {useNavigate} from "react-router-dom";

function Login(){

    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
    }
    return (
        <div>
            <h1>Login Page</h1>
            <input type="text" />
            <button  onClick={() => handleClick("/Products")}>Connection</button>
        </div>

        );

}
export default Login