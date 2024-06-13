import  { useState } from 'react';
import Footer from './footer';
import fig from '../Admin/imgs/fig.avif';

const Bookings = () => {
    const [formData, setFormData] = useState({
        userName: '',
        hotelName: '',
        amount: '',
        rooms: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('userName', formData.userName);
        data.append('hotelName', formData.hotelName); 
        data.append('amount', formData.amount);
        data.append('rooms', formData.rooms);
        data.append('image', formData.image);
        try {
            const response = await fetch('http://localhost:5000/api/book', {
                method: 'POST',
                body: data
            });
            const result = await response.json();
            if (response.ok) {
                alert('Booking created successfully!');
                setFormData({ userName: '', hotelName: '', amount: '', rooms: '', image: null }); // Reset form
            } else {
                alert('Error: ' + result.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the booking.');
        }
    };

    return (
        <div className='container-fluid body d-flex flex-column justify-content-between min-vh-100 bg-primary'>
            <img src={fig} alt="logo" height='350' />
        <div className='d-flex justify-content-center align-items-center flex-grow-1'>
        <form onSubmit={handleSubmit}>
            <label  className="form-label w-100 label">
                User Name:
                <input
                    type="text"
                    name="userName"
                    className="form-control inputArea " 
                    value={formData.userName}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label  className="form-label w-100 label">
                Hotel Name:
                <input
                    type="text"
                    name="hotelName"
                    className="form-control inputArea " 
                    value={formData.hotelName}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            
            <label  className="form-label w-100 label">
               Total Rooms:
                <input
                    type="number"
                    name="rooms"
                    className="form-control inputArea " 
                    value={formData.rooms}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label  className="form-label w-100 label">
               payble Amount:
                <input
                    type="number"
                    name="amount"
                    className="form-control inputArea " 
                    placeholder={formData.rooms>=1?formData.rooms*1000:0}
                    
                    value={formData.amount}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label  className="form-label w-100 label">
                Profile Image:
                <input
                    type="file"
                    name="image"
                    className="form-control inputArea " 
                    onChange={handleFileChange}
                    required
                />
            </label>
            <br />
            <button style={{marginRight: '20px'}} type="submit" className=' subBtn'>Submit</button>
        </form>
        </div>
        <div className='container-fluid mt-5'>
            <Footer/>
        </div>
        </div>
    );
};

export default Bookings;
