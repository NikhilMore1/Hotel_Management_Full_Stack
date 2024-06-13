// function AddHotels() {
//     return ( 
//         <div>
//             <h1>Hotels</h1>
//         </div>
//      );
// }

// export default AddHotels;


import { useState } from 'react';
import Footer from '../../components/footer';
const AddHotels = () => {
    const [Adata, setAdata] = useState({
        name: '',
        price: '',
        description:'',
        address:'',
        rating: '',
        image: null
    });
//    Use useNavigate hook

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
        data.append('price', Adata.price);
        data.append('description', Adata.description);
        data.append('address', Adata.address);
        data.append('rating', Adata.rating);
        data.append('image', Adata.image);
        try {
            const response = await fetch('http://localhost:5000/api/product', {
                method: 'POST',
                body: data
            });
            const result = await response.json();
            if (response.ok) {
                alert('Hotel Register successfully!');
                setAdata({ name: '', price: '',description:'',address:'', rating: '', image: null }); // Reset form
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
                <h1 style={{color:'aqua', fontStyle:'italic', fontWeight:'bold'}} className='head'>Hotel Registratin in HBS</h1>
                <div className='container-fluid mb-2'>
                    
                </div>
                <div className="mb-2 ">
                    <label className="form-label w-100 label">
                        Enter the Hotel name:
                        <input
                            type="text"
                            name="name"
                            className="form-control inputArea " 
                            value={Adata.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <br />
                <div className="mb-2 ">
                    <label className="form-label w-100 label">
                        Enter Price per room:
                        <input
                            type="text"
                            name="price"
                            className="form-control inputArea" 
                            value={Adata.price}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <br />
                <div className="mb-5 ">
                    <label className="form-label w-100 label">
                        Enter Description about Hotel:
                        <input
                            type="text"
                            name="description"
                            className="form-control inputArea" 
                            value={Adata.description}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="mb-5 ">
                    <label className="form-label w-100 label">
                        Enter hotel's address:
                        <input
                            type="text"
                            name="address"
                            className="form-control inputArea" 
                            value={Adata.address}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="mb-2 ">
                    <label className="form-label w-100 label">
                        Give  rating 5 starts
                        <input
                            type="text"
                            name="rating"
                            className="form-control inputArea" 
                            value={Adata.rating}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <br />
                <div className="mb-2 ">
                    <label className="form-label w-100 label">
                        Submit Hotel Picture:
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
            </form>
            </div>
            <Footer/>
        </div>
    );
};

export default AddHotels;
