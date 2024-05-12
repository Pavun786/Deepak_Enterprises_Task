

import "../StatutoryRequirements/StatutoryRequirements.css";
import statutory from "../../Assets/statutory.jpg"

function StatutoryRequirements(){

    return(
        <>
        <div className="statutory-title"> STATUTORY REQUIREMENTS </div>
        <div className="statutory-container">
           
          <img src={statutory} className="statutory-img" />
          
          <div className="statutory-detail" id="card">
           <div>
           <span>DEEPAK ENTERPRISES</span> strictly law-abiding management and 
            complies with all the statutory requirements laid down under various labour
            law as applicable from time to time. 
           </div>
            <div>
            Even in Non ESI Covered areas, we depute Employees with ESI
            covering for greater benefit in the event of causality. In some cases, we also
            provide refreshments and transport at our cost to keep them motivated
            </div>
          </div>
        </div>
        </>
    )
}
export default StatutoryRequirements;