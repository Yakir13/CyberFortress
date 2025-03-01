import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
    <nav className="nav">
        <NavLink to="/" className="site_title">CyberFortress</NavLink>
        <ul>
            <li><NavLink to="/CD">הגנות סייבר</NavLink></li>
            <li><NavLink to="/CA">התקפות סייבר</NavLink>
            <ul className="dropdown">
                <li><NavLink to="/DoS_DDoS">DDoS and DoS</NavLink></li>
                <li><NavLink to="/Malware">Malware</NavLink></li>
            </ul>
            </li>
            <li><NavLink to="/CIS">אבטחת מידע וסייבר</NavLink></li>
            <li><NavLink to="/Home">עמוד בית</NavLink></li>
            </ul>
    </nav>
    );
}

export default Navbar;













// import './Navbar.css';

// function Navbar(){
//     return(
//     <nav className="nav">
//         <a href="/" className="site_title">CyberFortress</a>
//         <ul>
//             <li><a href="CD">הגנות סייבר</a></li>
//             <li>
//                 <a href="CA">התקפות סייבר</a>
//                 <ul className="dropdown">
//                     <li><a href="DoS_DDoS">DDoS and DoS</a></li>
//                     <li><a href="Malware">Malware</a></li>
//                 </ul>
//             </li>
//             <li><a href="CIS">אבטחת מידע וסייבר</a></li>
//             <li><a href="Home">עמוד בית</a></li>
//         </ul>
//     </nav>
//     )
// }
// export default Navbar