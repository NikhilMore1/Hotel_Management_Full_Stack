import fig from '../../Admin/imgs/fig.avif';
import dis from '../../Admin/imgs/dis.avif';
import sec from '../../Admin/imgs/sec.avif';
import map from '../../Admin/imgs/map.avif';
import './navCss/contact.css'; // Import the CSS file for styling
import Footer from '../footer';

function Home() {
    return ( 
        <div className='container-fluid body d-flex flex-column justify-content-between min-vh-100 text-dark bg-light'>
            <div className="row align-items-center text-light bg-dark">
                <div className='col d-flex justify-content-center'>
                    <img src={fig} alt="logo" height='300' width='550' />
                </div>
                <div className="col  justify-content-center">
                    <h1 className='typing-effect container-fluid m-5 hotel'>
                        <span><b><i>Hotel Management System</i></b></span>
                    </h1>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-grow-1'>
            </div>
            <div className='container-fluid cont row'>
                <img src={dis} alt="Discount " />
                <img src={sec} alt="second"  className='mt-3'/>
                <div className="col">
                   <img src={map} alt="maps" width='600' height='500' />
                </div>
                <div className="col">
                    <h1 className='mt-5 d-flex justify-content-center align-items-center'>There's an HBS around. Always.</h1><br /><br />
                    <p className='d-flex justify-content-center align-items-center'> More Destinations. More Ease. More Affordable.</p><br /><br />
                    <ul>
                        <span className='row'>
                        <li className='col'> <b>Indonesia</b></li>
                        <li className='col'> <b>Malaysia </b></li>
                        <li className='col'> <b>Denmark </b></li>
                        </span><br /><br />
                      <span className='row'>
                        <li className='col'> <b>Denmark </b></li>
                        <li className='col'> <b>UK </b></li>
                        <li className='col'> <b>USA </b></li>
                      </span>
                
                    </ul>
                </div>
            </div>
            <div className='bg-secondary'>

                <Footer/>
            </div>
        </div>
     );
}

export default Home;
