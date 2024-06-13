import Footer from '../footer';
import './navCss/contact.css';

function Contact() {
    return ( 
        <div className="container-fluid bg-secondary">
            <div className="container para  justify-content-center align-items-center text-center con mt-4">
                <h4 className='com'>Hotel Management System(HBS Group)</h4>
                <h1>Contact Us</h1>
                <div className='row mt-5'>
                    <div className='col '>
                        <h3>Contact Details</h3>
                        
                        <span><b>Email: </b><i> moren9817@gmail.com</i></span><br /><br />
                        <span><b>Mobile: </b><i>9766979627</i></span><br /><br />
                        <span><b>Office Details:</b></span><br />
                        <span><i>Ghargaon,Sangamner <br />Maharashtra 422620</i></span>
                    </div>
                    <div className='col '>
                        <h3>Join us on social media</h3>
                        <span><b><i><a href="https://www.instagram.com/nikhil_more_98/">Instagram</a></i></b></span><br /><br />
                        <span><b><i><a href="https://www.fiverr.com/nikhil_more_98?up_rollout=true">Fiverr</a></i></b></span><br /><br />
                        <span><b><i><a href="https://www.facebook.com/profile.php?id=100079894650019">Facebook</a></i></b></span>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <Footer/>
            </div>
        </div>
     );
}

export default Contact;
