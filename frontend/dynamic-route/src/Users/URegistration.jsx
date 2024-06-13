import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const URegistration = () => {
    const [Adata, setAdata] = useState({
        name: '',
        username: '',
        mobile: '',
        email: '',
        password: '',
        image: null
    });
    const navigate = useNavigate();

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
        data.append('name', Adata.name);
        data.append('username', Adata.username);
        data.append('mobile', Adata.mobile);
        data.append('email', Adata.email);
        data.append('password', Adata.password);
        data.append('image', Adata.image);
        try {
            const response = await fetch('http://localhost:5000/api/user', {
                method: 'POST',
                body: data
            });
            const result = await response.json();
            if (response.ok) {
                alert('Registration created successfully!');
                setAdata({ name: '', username: '', mobile: '', email: '', password: '', image: null });
                navigate('/ULogin');
            } else {
                alert('Error: ' + result.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the registration.');
        }
    };

    return (
        <div className='container-fluid body d-flex justify-content-center align-items-center vh-400 bg-primary'>
            <form onSubmit={handleSubmit}>
                <h1 style={{ color: 'aqua', fontStyle: 'italic', fontWeight: 'bold' }} className='head'>Registration As User</h1>
                <div className='container-fluid mb-2'>
                </div>
                <div className="mb-2 ">
                    <label className="form-label w-100 label">
                        Enter your name:
                        <input
                            type="text"
                            name="name"
                            className="form-control inputArea"
                            value={Adata.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <br />
                <div className="mb-2 ">
                    <label className="form-label w-100 label">
                        Enter your userName:
                        <input
                            type="text"
                            name="username"
                            className="form-control inputArea"
                            value={Adata.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <br />
                <div className="mb-5 ">
                    <label className="form-label w-100 label">
                        Enter your Mobile No:
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
                <div className="mb-5 ">
                    <label className="form-label w-100 label">
                        Enter your Email address:
                        <input
                            type="text"
                            name="email"
                            className="form-control inputArea"
                            value={Adata.email}
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
                <button style={{ marginRight: '20px' }} type="submit" className='subBtn'>Submit</button>
                <Link to="/ULogin" className="text-white">Already registered?</Link>
            </form>
        </div>
    );
};

export default URegistration;
