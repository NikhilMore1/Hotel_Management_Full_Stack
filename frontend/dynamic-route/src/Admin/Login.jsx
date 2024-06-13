// import React from 'react';
import { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/footer';

const Login = ({ setIsAdmin }) => {
    const [formData, setFormData] = useState({
        userNames: '',
        mobile:'',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const isAdminUser =false; // Replace with actual login check
        // setIsAdmin(isAdminUser);
        // navigate(isAdminUser ? "/allBookings" : "/Header");
        try {
            const response = await fetch('http://localhost:5000/api/nikhil/log', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            if (response.ok) {
                alert('Login successful!');
                // navigate('/AdminHeader');
        //         const isAdminUser =true; // Replace with actual login check
        // setIsAdmin(isAdminUser);
        // navigate("/AdminHeader");
        const role = 'admin';
        setIsAdmin(role);
            
            localStorage.setItem('role', role);
            // navigate('/AdminHeader');
            if (role === 'admin') {
                navigate('/AdminHeader');
             } // Navigate to admin dashboard
            //   } else {
            //    navigate('/user-dashboard'); // Navigate to user dashboard
            //   }
            } else {
                alert('Error: ' + result.error);
        //         const isAdminUser =false; // Replace with actual login check
        // setIsAdmin(isAdminUser);
        // navigate("/MainHeader");
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during login.');
        }
    };

    return (
        <div className='container-fluid text-center parents row'>
          <div className='log-parent col'>
            <h1 className='heading'>Welcome to login page</h1>
            <h1 className='log-head'>There’s a smarter way to HBS around</h1>
            <h5 className='log-info'>Sign up with your phone number,username, and your password <br/> and get exclusive access to discounts and savings on HBS stays and with our many travel partners.</h5>
          </div>
          <div className='log-parent2 col container-fluid body d-flex justify-content-center align-items-center vh-400 '>
         
            <form onSubmit={handleSubmit}>
            <h1 style={{color:'aqua', fontStyle:'italic', fontWeight:'bold'}} className='head-log mb-3'>Login As Admin</h1>
            <div className="mb-2 ">
                    <label className="form-label w-100 label">
                        Enter your UserName
                        <input
                            type="text"
                            name="userNames"
                            className="form-control inputArea " 
                            value={formData.userNames}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <br />
                <div className="mb-2 ">
                    <label className="form-label w-100 label">
                        Enter your phone number:
                        <input
                            type="text"
                            name="mobile"
                            className="form-control inputArea " 
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <br />
                <div className="mb-2 ">
                    <label className="form-label w-100 label">
                        Enter your password:
                        <input
                            type="text"
                            name="password"
                            className="form-control inputArea " 
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <br />
                <button style={{marginRight: '20px'}} type="submit" className=' subBtn'>Submit</button> 
            </form>
          </div>
          <Footer/>
        </div>
    );
};

export default Login;
