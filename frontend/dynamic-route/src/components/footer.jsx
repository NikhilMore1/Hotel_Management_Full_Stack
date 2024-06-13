import { Link } from "react-router-dom";

function Footer() {
    return ( 
        <div className="row text-bg-dark ">
            <div className="col d-flex flex-column justify-content-center">
                <button className="btn btn-link"><Link to="/Home" className="nav-link">Home</Link></button>
                <button className="btn btn-link"><Link to="/devloper" className="nav-link">Developer</Link></button>
                <button className="btn btn-link"><Link to="/Information" className="nav-link">About us</Link></button>
                <button className="btn btn-link"><Link to="/Contact" className="nav-link">Contact us</Link></button>
            </div>
            <div className="col d-flex flex-column justify-content-center">
                <button className="btn btn-link"><a href="https://www.instagram.com/nikhil_more_98/">Instagram</a></button>
                <button className="btn btn-link"><a href="https://www.fiverr.com/nikhil_more_98?up_rollout=true">Fiverr</a></button>
                <button className="btn btn-link"><a href="https://www.facebook.com/profile.php?id=100079894650019">Facebook</a></button>
                <button className="btn btn-link"><a href="https://github.com/Nikhilgit123">Github</a></button>
            </div>
            <div className="col d-flex flex-column justify-content-center">
                <button className="btn btn-link"><Link to="/Registration" className="nav-link">Sign In(admin)</Link></button>
                <button className="btn btn-link"><Link to="/Login" className="nav-link">Sign up(Admin)</Link></button>
                <button className="btn btn-link"><Link to="/URegistration" className="nav-link">Sign in(User)</Link></button>
                <button className="btn btn-link"><Link to="/ULogin" className="nav-link">Sign Up(user)</Link></button>
            </div>
            <div className="d-flex justify-content-center align-items-center " style={{color:'blanchedalmond'}}>
                <span ><b><i>All right's are reserved  @Nikhil More</i></b></span><br />
                
            </div>
            <div className="d-flex justify-content-center align-items-center " style={{color:'blanchedalmond'}}>
                <span><b><i>@2024-2025</i></b></span>
            </div>

        </div>
     );
}

export default Footer;