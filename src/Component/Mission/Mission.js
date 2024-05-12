 import "../Mission/Mission.css"
 import mission from "../../Assets/mission.jpg"
 import FlagIcon from '@mui/icons-material/Flag';

 function Mission (){

    return(
        <>
          <div className="mission-title" id="mission">Mission </div>
        <div className="mission-container">
           
          <img src={mission} className="mission-img" />
          
          <div className="mission-detail" id="card">
           
           <div className="detail">
            <div><FlagIcon/></div>
           We care for our dient companies and satisfy them with professional
            Quality and dedicated Services 
            </div>

            <div className="detail">
            <div><FlagIcon/></div>
            We at DEEPAK ENTERPRISES care for our people and motivate,
            train, develop and involve them to their full potential in the work. 
            
            </div>
            
            <div className="detail">
            <div><FlagIcon/></div>    
            We care for the surrounding and to keep the same neat and dean
            </div>
            <div className="detail">
             Our commitments to these values ensure meaningful, future and safe Working as a multi faced facility Management services Group. 
            </div>

          </div>
         
        </div>
        </>
    )
 }
 export default Mission;