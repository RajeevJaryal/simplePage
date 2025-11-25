import "./NavBar.css";
const NavBar=()=>{
    return (<nav>
        <h1>BrandName</h1>
        <ul>
            <li>Opportunities</li>
            <li>Experience</li>
        </ul>
        <div>
            <button type="button">Login</button>
            <button type="button">Signup</button>
        </div>
    </nav>
    );
};

export default NavBar;