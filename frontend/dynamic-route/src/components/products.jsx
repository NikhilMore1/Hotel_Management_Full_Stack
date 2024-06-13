import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

function Products() {
    const [products,setProducts] = useState([]);
    const fetchData = async ()=>{
        try{
            const resp = await axios.get('http://localhost:5000/api/product');
            setProducts(resp.data.products);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData()
    },[]) 
    return ( 
        <div className="row">
            {
                products.map(product=>(
                    // eslint-disable-next-line react/jsx-key
                    <div className="col-md-3">
                       <div className="card">
  <img src={product.image} className="card-img-top" alt={product.title} height="250"/>
  <div className="card-body">
    <h5 className="card-title"><i>Hotel :</i>{product.name}</h5>
    <p className="card-title"><i>Price per 1 room💲</i><span><b>{product.price}</b></span></p>
    <p className="card-text"><i>Hotel Add</i>{product.rating}</p>
    <Link to={`/details/${product._id}`}className="btn btn-primary">View more</Link>
  </div>
</div>

                    </div>
                ))
            }
        <div className="container mt-3">
            <Footer/>
        </div>
        </div>
     );
}

export default Products;