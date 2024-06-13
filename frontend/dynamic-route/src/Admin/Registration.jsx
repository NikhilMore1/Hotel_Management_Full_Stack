import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate from react-router-dom
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import './Reg.css';
const Registration = () => {
    const [Adata, setAdata] = useState({
        userName: '',
        lastName: '',
        userNames:'',
        mobile:'',
        password: '',
        pincode:'',
        district:'',
        state:'',
        image: null
    });
    const navigate = useNavigate(); // Use useNavigate hook

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdata({
            ...Adata,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setAdata({
            ...Adata,
            image: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('userName', Adata.userName);
        data.append('lastName', Adata.lastName);
        data.append('userNames', Adata.userNames);
        data.append('mobile', Adata.mobile);
        data.append('password', Adata.password);
        data.append('pincode', Adata.pincode);
        data.append('district', Adata.district);
        data.append('state', Adata.state);
        data.append('image', Adata.image);
        try {
            const response = await fetch('http://localhost:5000/api/nikhil', {
                method: 'POST',
                body: data
            });
            const result = await response.json();
            if (response.ok) {
                alert('Registration created successfully!');
                setAdata({ userName: '', lastName: '',userNames:'',mobile:'', password: '',pincode:'',district:'',state:'', image: null }); // Reset form
                navigate('/login'); // Redirect to the login page
            } else {
                alert('Error: ' + result.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the registration.');
        }
    };

    return (
        <div className='container-fluid body d-flex flex-column justify-content-between min-vh-100 bg-primary'>
        <div className='d-flex justify-content-center align-items-center flex-grow-1'>
            <form onSubmit={handleSubmit}>
                <h1 style={{color:'aqua', fontStyle:'italic', fontWeight:'bold'}} className='head'>Registration As Admin</h1>
                <div className='container-fluid mb-2'>
                    
                </div>
                <div className="mb-2 ">
                    <label className="form-label w-100 label">
                        Enter your first name:
                        <input
                            type="text"
                            name="userName"
                            className="form-control inputArea " 
                            value={Adata.userName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <br />
                <div className="mb-2 ">
                    <label className="form-label w-100 label">
                        Enter your Last Name:
                        <input
                            type="text"
                            name="lastName"
                            className="form-control inputArea" 
                            value={Adata.lastName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <br />
                <div className="mb-5 ">
                    <label className="form-label w-100 label">
                        Enter your User Name:
                        <input
                            type="text"
                            name="userNames"
                            className="form-control inputArea" 
                            value={Adata.userNames}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="mb-5 ">
                    <label className="form-label w-100 label">
                        Enter your mobile number:
                        <input
                            type="Number"
                            name="mobile"
                            className="form-control inputArea" 
                            value={Adata.mobile}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="mb-2 ">
                    <label className="form-label w-100 label">
                        Enter the Password
                        <input
                            type="text"
                            name="password"
                            className="form-control inputArea" 
                            value={Adata.password}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <br />
                <div className="mb-2 ">
                    <label className="form-label w-100 label">
                        Enter the Pincode
                        <input
                            type="text"
                            name="pincode"
                            className="form-control inputArea" 
                            value={Adata.pincode}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <br />
                <div className="mb-2 ">
                    <label className="form-label w-100 label">
                        Enter your District
                        <input
                            type="text"
                            name="district"
                            className="form-control inputArea" 
                            value={Adata.district}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <br />
                <div className="mb-2 ">
                    <label className="form-label w-100 label">
                       Enter your  State
                        <input
                            type="text"
                            name="state"
                            className="form-control inputArea" 
                            value={Adata.state}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <br />
                <div className="mb-2 ">
                    <label className="form-label w-100 label">
                        Submit your profile photo:
                        <input
                            type="file"
                            name="image"
                            className="form-control inputArea" 
                            onChange={handleFileChange}
                            required
                        />
                    </label>
                </div>
                <br />
                <button style={{marginRight: '20px'}} type="submit" className=' subBtn'>Submit</button> 
                <Link to="/login" className="text-white">Already registered?</Link>
            </form>
        </div>
        <div className='mt-3 container-fluid'>
            <Footer/>
        </div>
        </div>
    );
};

export default Registration;
