import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link} from 'react-router-dom';
import Footer from "./footer";
function Details() {
    const [products,setProducts] = useState([]);
    const {_id} = useParams();
    const [product,setProduct] = useState({});
    console.log(_id);
    const fetchData = async()=>{
        try{
            const resp = await axios.get(`http://localhost:5000/api/product/`);
            setProduct(resp.data);

        }catch(error){
            console.log(error);
            console.log("error msg");
        }
    }
    useEffect(()=>{
        fetchData();
    },[])

    return ( 
        <div className="container-fluid bg-secondary">
           id {product._id}
            <img src={product.image} alt={product.title} />
            <h3>{product.name}</h3>
            <h4>Price:{product.price}</h4>
            <p>Description:{product.discription}</p>
            <h5>Rating:{product.address}</h5>
            <h5>Brand:{product.brand}</h5>
             <Link to='/Bookings' className='btn btn-primary'><i><b>Book Hotel</b></i></Link>
             <div className="container-fluid " style={{marginTop:'19rem'}}>
                <Footer/>
             </div>
        </div>
     );
}
export default Details;