import "../Welfare/Welfare.css";
import welfare from "../../Assets/welfare.jpg"

function Welfare(){

    return(
        <>
        <div className="welfare-title" id="welfare">WELFARE</div>
        <div className="welfare-container">
           
          <img src={welfare} className="welfare-img" />
          
          <div className="welfare-detail" id="card">
           <div className="detail">
           DEEPAK ENTERPRISES takes complete care and looks after Welfare of its personnel. House keeping staff and personal are provided uniforms 
           </div>
            <div className="detail">
           DEEPAK ENTERPRISES Will submit the bills by 3rd of every month and the
           Principal Employer would release the Cheque / DD / payment by 5th of every
           month to enable DEEPAK ENTERPRISES make disbursement of wages to
           contract workmen by 7th, the bill will also indude : 
            </div>
            <div className="list">
                <div>ESI</div>
                <div>-</div>
                <div>4.75% (Employer contribution) </div>
            </div>
            <div className="list">
                <div>PF</div>
                <div>-</div>
                <div>13.61%(Employer Contribution + Administration Charges) </div>
            </div>
            <div className="list">
                <div>BONUS</div>
                <div>-</div>
                <div>Cleanliness, Standardization.</div>
            </div>
            <div className="list">
                <div>SERVICE CHARGES</div>
                <div>-</div>
                <div>15% (Negotiable)</div>
            </div>
          </div>
        </div>
        </>
    )
}
export default Welfare;