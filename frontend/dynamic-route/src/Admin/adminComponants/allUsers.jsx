import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from '../../components/footer';

function AllUsers() {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/api/user');
            console.log(resp.data.products); // Check the structure of the response
            setProducts(resp.data.products || []); // Ensure products is an array
        } catch (error) {
            console.log(error);
            setProducts([]); // Set an empty array in case of error
        }
    }

    useEffect(() => {
        fetchData(); 
    }, []);
 
    return (
        <div className="row">
            {
                products.length > 0 ? (
                    products.map(product => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="col-md-3 bg-secondary" key={product.id}>
                            <div className="card">
                                <img src={product.image} className="card-img-top" alt={product.name} height="250" />
                                <div className="card-body">
                                    <h5 className="card-title"><i>Name :</i>{product.name}</h5>
                                    <p className="card-title"><i>User Name</i><span><b>{product.username}</b></span></p>
                                    <p className="card-text"><i>mobile</i>{product.mobile}</p>
                                    <p className="card-text"><i>Email</i>{product.email}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading products...</p>
                )
            }
            <div className="mt-5 container" style={{marginTop:'3rem'}}>
                <Footer/>
            </div>
        </div>
    );
}

export default AllUsers;
