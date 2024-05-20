import EmailIcon from '@mui/icons-material/Email';
import home from "../../Assets/deepak_logo.png"
import PublicIcon from '@mui/icons-material/Public';
import '../Home/Home.css'

 function Home(){


      return(
        <div className="home-container">
          
            <img src={home} className='home-img'></img>
           
            <div className='home-sub2'>
                <div className='home-detail'>Deepak Enterprises</div>
                 <div className='home-detail'>No.11,Santhosh nagar</div>
                 <div className='home-detail'>Pattunoolchathiram</div>
                 <div className='home-detail'>Sriperumbudur-602105</div>
                 
                 <a href='mailto:admin@deepakenterprises.net.in' target='_blank'>
                <EmailIcon className="link"/>
                 </a>

                 <a href='https://www.deepakenterprises.net.in' target='_blank'>
                  <PublicIcon className="link"/>
                  </a>
            </div>
            

        </div>
      )
 }

 export default Home;