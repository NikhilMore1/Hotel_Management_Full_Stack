 import './navCss/contact.css';
 import fig from '../../Admin/imgs/fig.avif';
 import phone from '../../Admin/imgs/phone.avif';
import Footer from '../footer';
function Information() {
    return ( 
        <div className="container-fluid bg-secondary">
           <div className="container para  justify-content-center align-items-center text-center con mt-4">
           <div className='row'>
            <div className='col'>
            <h1 className="om"><span><b>Our Mission</b></span></h1>
            <p><b><i>HBS is a global platform that empowers entrepreneurs and small businesses with hotels and homes by providing full stack technology that increases earnings and eases operations. Bringing affordable and trusted accommodation that guests can book instantly.</i></b></p>
            </div>
            <div className='col'>
                <img src={fig} alt="img" height='350'/>
            </div>
           </div>
          
           </div>
           <div className='container para1  justify-content-center align-items-center text-center con mt-4'>
            <div className="row">
            <h1 style={{fontSize:'5rem'}}><b>157K+ storefronts are using our tech globally</b></h1>
                <div className="col col1 container-fluid" style={{border:'1px solid antiquewhite', backgroundColor:'wheat'}}>
              <h4 style={{textAlign:'center'}}> <li>For maximising revenue</li>  </h4>
              <h4 style={{textAlign:'center'}}> <li>To build online presence across channels</li></h4>
              <h4 style={{textAlign:'center'}}> <li>To reach more guests & optimise experience</li></h4>
              <h4 style={{textAlign:'center'}}> <li>For hassle-free operations</li></h4>
              <h4 style={{textAlign:'center'}}> <li>To build a brand loved by both travellers & city dwellers</li></h4>
                </div>
                <div className="col">
                    <img src={phone} alt="phone" height='250' />
                </div>
            </div>
            <div className='container mt-5'>
                <Footer/>
            </div>
           </div>
        </div>
     );
}

export default Information;