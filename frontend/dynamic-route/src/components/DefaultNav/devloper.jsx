import nikhil from '../../Admin/imgs/nikhil.jpg';
import Footer from '../footer';
function Developer() {
    return ( 
        <div className="container-fluid bg-secondary">
        <div className="container para  justify-content-center align-items-center text-center con mt-4">
        <div className='row'>
         <div className='col'>
         <h1 className="om"><span><b>About me</b></span></h1>
         <p><b><i><span>Hey..</span><br />
         I am Nikhil More Software Engineer Currently persuing BE(Computer) <br />
         And also I learn the Skill Academy's <b>Full stack development course</b>
         
                    Welcome to our hotel management system! Our hotel has been providing exceptional service and comfort for over a decade. <br /> 
                    We pride ourselves on offering a luxurious experience to all our guests.
              
                    Our mission is to provide a home away from home, ensuring that every guest feels valued and pampered. 
                    We offer a variety of services, including room service, spa treatments, and guided tours. <br />
                
          
                    Whether you are here for business or pleasure, our dedicated staff is here to make your stay unforgettable.
                    Thank you for choosing us, and we look forward to welcoming you.
         </i></b></p>
         </div>
         <div className='col'>
             <img src={nikhil} alt="img" height='350'/>
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
                 <img src={nikhil} alt="phone" height='250' />
             </div>
         </div>
         <div className='container mt-5'>
             <Footer/>
         </div>
        </div>
     </div>
     );
}

export default Developer;