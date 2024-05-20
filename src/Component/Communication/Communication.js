import "../Communication/Communication.css";
import communication from "../../Assets/communication.jpg"

function Communication(){

    return(
        <>
        <div className="communication-title" id="communication">COMMUNICATION</div>
        <div className="communication-container">
           
          <img src={communication} className="communication-img" />
          
          <div className="communication-detail" id="card">
          Each Area Manager along with Unit Supervisor conducts a meeting
          every month unit wise with our employees. Here, we stress the need for
          following companies Policy and procedure, Good Housekeeping and also to be
          a team with discipline and dedicated work force
          </div>
        </div>
        </>
    )
}
export default Communication;