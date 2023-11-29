import { NavLink } from "react-router-dom"


function NavBar(){
    return (
        <>
            <ul>
                <li>
                    <NavLink to="/home">home</NavLink>
                </li>
                <li>
                    <NavLink to="/products">products</NavLink>
                </li>
                <li>
                    <NavLink to="/about">about</NavLink>
                </li>
                <li>
                    <NavLink to="/">Deconnexion</NavLink>
                </li>
                
            </ul>
        </>
    )
}
export default NavBar