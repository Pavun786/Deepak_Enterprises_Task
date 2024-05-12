
import "../WeProvide/WeProvide.css";
import provide from "../../Assets/we offer.png"

function WeProvide(){

    return(
        <>
        <div className="provide-title">WE PROVIDE</div>
        <div className="provide-container">
           
          <img src={provide} className="provide-img" />
          
          <div className="provide-detail" id="card">
          Customs Delight at Lowest possible Cost by providing motivated work
force. We shall abide by all statutory norms and work for continuous
improvement 
          </div>
        </div>
        </>
    )
}
export default WeProvide;