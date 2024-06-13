import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

function allBookings() {
    const [products,setProducts] = useState([]);
    const fetchData = async ()=>{
        try{
            const resp = await axios.get('http://localhost:5000/api/book');
            setProducts(resp.data.products);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return ( 
        <div className="row bg-secondary">
            {
                products.map(product=>(
                    // eslint-disable-next-line react/jsx-key
                    <div className="col-md-3">
                       <div className="card">
  <img src={product.image} className="card-img-top" alt={product.userName} height="250"/>
  <div className="card-body">
    <h5 className="card-title">User Name : <b><i>{product.userName}</i></b></h5>
    <h5 className="card-title">Choosed Hotel : <b><i>{product.hotelName}</i></b></h5>
    <h5 className="card-title">Payed Amount💲: <b><i>{product.amount}</i></b> </h5>
    <p className="card-text">Total Rooms: <b><i>{product.rooms}</i></b></p>
  </div>
</div>
                    </div>
                ))
            }
        <Footer/>
        </div>
     );
}

export default allBookings;