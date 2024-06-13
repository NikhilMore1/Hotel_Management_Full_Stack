// import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ULogin = ({ setIsAdmin }) => {
    const [formData, setFormData] = useState({
        username: '',
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
            const response = await fetch('http://localhost:5000/api/user/log', {
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
                const role ="user"; // Replace with actual login check
        setIsAdmin(role);
        // navigate("/Dashboard");
                // const role = 'admin';

            localStorage.setItem('role', role);
            if (role === 'user') {
                navigate('/Header');  
            }// Navigate to admin dashboard
            //   } else {
            //    navigate('/user-dashboard'); // Navigate to user dashboard
            //   }
            localStorage.setItem("username",formData.username);
            localStorage.setItem("mobile",formData.mobile);
            localStorage.setItem("password",formData.password);
            } else {
                alert('Error: ' + result.error);
        //         const isAdminUser =false; // Replace with actual login check
        // setIsAdmin(isAdminUser);
        navigate("/URegistration");
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
            <h1 style={{color:'aqua', fontStyle:'italic', fontWeight:'bold'}} className='head-log mb-3'>Login As User</h1>
            <div className="mb-2 ">
                    <label className="form-label w-100 label">
                        Enter your UserName
                        <input
                            type="text"
                            name="username"
                            className="form-control inputArea " 
                            value={formData.username}
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
        </div>
    );
};
export default ULogin;
