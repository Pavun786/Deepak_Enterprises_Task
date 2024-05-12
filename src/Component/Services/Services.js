
import "../Services/Services.css";
import service from "../../Assets/service2.jpg"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function Services(){

  const services = [
    "Fresh / Experience Diploma Holders",
    "IT - any trade",
    "Unskilled Workmen (10th Pass and +2)",
    "Data Entry Operators",
    "Drivers, Forklift Operators and Office Boy",
    "Administrative Staff"
  ]

    return(
        <>
        <div className="service-title" id="service">SERVICE</div>
        <div className="service-container">
           
          <img src={service} className="service-img" />
          
          <div className="service-detail" id="card">
         <span> DEEPAK ENTERPRISES </span> provides professional services in the supply of
          competent, quality conscious and dedicated skilled and unskilled Human
          Resources to suit to the requirements of manufacturing and service
          Industries. we undertake all types of work - be it Housekeeping, ETO, Office,
          Packing, Production Shop Floor or any other as per your requirement.
          DEEPAK ENTERPRISES provides on contract basis the following Man power- (either Sex) 

          {services.map((dt)=>{
                    return(
                    <div className="service-lists">
                    <DoubleArrowIcon/> 
                    <div className="list">{dt}</div>
                    </div>
                    )
                })}
                </div>
          </div>
          
                
        
        </>
    )
}
export default Services;