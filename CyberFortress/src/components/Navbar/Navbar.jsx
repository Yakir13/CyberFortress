import './Navbar.css';

function Navbar(){
    return(
        <nav className="nav">
            <a href="/" className="site_title">CyberFortress</a>
            <ul>
                <li><a href="/CD">הגנות סייבר</a></li>
                <li>
                    <a href="/CA">התקפות סייבר</a>
                    <ul className="dropdown">
                        <li><a href="DoS_DDoS">DDoS and DoS</a></li>
                        <li><a href="Malware">Malware</a></li>
                    </ul>
                </li>
                <li><a href="/CIS">אבטחת מידע וסייבר</a></li>
                <li><a href="/Home">עמוד בית</a></li>
            </ul>
        </nav>
    )
}
export default Navbar