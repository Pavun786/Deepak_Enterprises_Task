import "../Safety/Safety.css";
import safety2 from "../../Assets/safety2.jpg"

function Safety(){

    return(
        <>
        <div className="safety-title" id="safety">SAFETY</div>
        <div className="safety-container">
           
          <img src={safety2} className="safety-img" />
          
          <div className="safety-detail" id="card">
          We are following SOP's of the concern company. Apart from that
          before starting the shift the concern supervisor will conduct PEP TAEK with
          the workers (He will ensure the PPE's and physical fitness of the worker) Our
           Safety officer will contact you once in fifteen days. 
            
          </div>
        </div>
        </>
    )
}
export default Safety;