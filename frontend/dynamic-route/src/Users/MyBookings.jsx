import axios from "axios";
import { useEffect, useState } from "react";
import Footer from '../components/footer';

function MyBookings() {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/api/book');
            setProducts(resp.data.products);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/book`);
            setProducts(products.filter(product => product._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row bg-secondary">
            {products.map(product => (
                <div className="col-md-3" key={product._id}>
                    <div className="card">
                        <img src={product.image} className="card-img-top" alt={product.userName} height="250" />
                        <div className="card-body">
                            <h5 className="card-title">Client Name : <b><i>{product.userName}</i></b></h5>
                            <h5 className="card-title">Choosen Hotel : <b><i>{product.hotelName}</i></b></h5>
                            <h5 className="card-title">Amount Payed $: <b><i>{product.amount}</i></b></h5>
                            <p className="card-text">Number Of Rooms : <b><i>{product.rooms}</i></b></p>
                            <button className="btn btn-danger" onClick={() => handleDelete(product._id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <Footer />
        </div>
    );
}

export default MyBookings;
