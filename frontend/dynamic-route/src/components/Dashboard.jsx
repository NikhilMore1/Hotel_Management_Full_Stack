// // import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import phone from '../Admin/imgs/phone.avif';
import { useState } from "react";
import Footer from "./footer";

// import Footer from "./footer";

// function Dashboard() {
//     return ( 

//         // <div classNameName="container mt-3">
//         //     <h3 classNameName="text-center text-bg-warning" >Welcome</h3>
//         //     <ul classNameName="nav justify-content-center">
//         //         <li classNameName="nav-item">
//         //             <Link classNameName="nav-link active" 
//         //             aria-current="page">Active</Link>
//         //         </li>
//         //         <li classNameName="nav-item">
//         //             <Link classNameName="nav-link active" 
//         //             aria-current="profile">Profile</Link>
//         //         </li>
//         //         <li classNameName="nav-item">
//         //             <Link classNameName="nav-link active" 
//         //             aria-current="setting">Settings</Link>
//         //         </li>
//         //     </ul>
//         //     <Outlet />
            
//         // </div>
//         <div>

//         </div>
//      );
// }

// export default Dashboard;



function Dashboard() {

  const user = localStorage.getItem("username");
  const mob = localStorage.getItem("mobile");
  const pass = localStorage.getItem("password");
  const navigate = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Do you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("username");
      localStorage.removeItem("mobile");
      localStorage.removeItem("password");
      setIsLoggedOut(true);
      navigate('/MainHeader');
    } else {
      alert("Logout not granted.");
    }
  };

  if (isLoggedOut) {
    return null; // Return null if logged out to prevent rendering the Dashboard
  }
    return(
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="data:image/jpeg;base64,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" className="d-block w-100" alt="image 1" height='600'/>

      <div className="carousel-caption d-none d-md-block">
        <h5>Taj Hotel</h5>
        <p>Just choose your destination your path make buetifull <i><b>HBS</b></i>.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFfp_OFNxvLlPp4OKT6THDj6c3EIVE4BTXdA&s" className="d-block w-100" alt="Image 2" height='600'/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Oberoy Hotel For Royal one✌️</h5>
        <p>Just choose your destination your path make buetifull <i><b>HBS</b></i>.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyB437ICfEYb9TYq1ELPFMyUzV5kmXQU-Zsg&s" className="d-block w-100" alt="image 3" height='600'/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Angelia 5 start Hotel & rooms💸💲💱</h5>
        <p>Just choose your destination your path make buetifull <i><b>HBS</b></i>.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

  <div className="row mt-5">
    <div className="col h-20" style={{backgroundColor:'antiquewhite'}} >
      <h1 className="typing-effect"><b><i>User Name : </i></b>{user}</h1>
      <h1 className="typing-effect"><b><i>Mobile No : </i></b>{mob}</h1>
      <h1 className="typing-effect"><b><i>your Password :</i></b>{pass}</h1>
      <div className="row">
        <div className="col">
        <button style={{marginRight: '20px'}} type="submit" className=' subBtn mt-5'>View</button>
        </div>
        <div className="col">
        <button onSubmit={handleLogout} style={{marginRight: '20px'}} type="button" className=' subBtn bg-danger mt-5'>log-out</button>
        
        </div>
        </div> 
    </div>
    <div className="col">
      <img src={phone} alt="phone"height='300' width='680' />
    </div>
  </div>
  <div className="container-fluid mt-5 bg-secondary">
    <Footer/>
  </div>
</div>

    );
}

export default Dashboard;