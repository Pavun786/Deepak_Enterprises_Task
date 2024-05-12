import "../Content/Content.css";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import content from "../../Assets/contents.png"

  function Content(){
    
     const contents = [
        "INTRODUCTION LETTER",
         "ORGANISATION CHART",
         "ABOUT US - BRIEF DETAILS",
         "ESIC-REGISTERATION CERTIFICATE",
         "EPF - REGISTERATION CERTIFICATE ",
         "QUOTATION",
          "GOVERNMENT OF TAMILNADU GAZETTE COPY",
          "SERVICE TAX REGISTRATION CERTIFICATE",
          "CLIENT DETAILS"
     ]

       return(
        <div className="content-container">
            <div className="content-container-sub1">
                Contents
            </div>
            <div className="content-container-sub2">
                <div>
                {contents.map((dt)=>{
                    return(
                    <div className="content-lists">
                    <DoubleArrowIcon/> 
                    <div className="list">{dt}</div>
                    </div>
                    )
                })}
                </div>
               <img src={content} className="content-img"/> 
               
            </div>

        </div>
       )
  }

  export default Content;