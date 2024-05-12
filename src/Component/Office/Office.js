import "../Office/Office.css";
import office from "../../Assets/office.jpg"

function Office(){

    return(
        <>
        <div className="office-title">OFFICE & INFRASTRUCTURE </div>
        <div className="office-container">
           
          <img src={office} className="office-img" />
          
          <div className="office-detail" id="card">
            <span> DEEPAK ENTERPRISES </span>has it Administrative offic.eat Srtperumbudur,
            Kancheepuram District with 24 Hrs contact facility. For effective monitoring,
            we have 2 Nos. of Area Managers who operate area wise and each Area
            manager is provided with Vehide & Mobile for easy movement and quick
            accessibility and safely supervisor. We have a strong IT base, which enables
            quick and correct information on any Data required
            
          </div>
        </div>
        </>
    )
}
export default Office;