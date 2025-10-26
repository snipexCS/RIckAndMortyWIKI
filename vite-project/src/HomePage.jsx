import './HomePage.css';
import Navbars from "./Navbars";
import About from './About';
import Footers from'./Footers';

function HomePage() {
  return (
    <>
      <div className="background-wrapper">
        <div className="container">
         
        
        </div>
      </div>

      <div className="content-section">
       <About/>
      </div>
      <div className='Footer'>
            <Footers/>
      </div>
    </>
  );
}

export default HomePage;
