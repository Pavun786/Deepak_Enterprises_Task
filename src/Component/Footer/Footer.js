import "../Footer/Footer.css"
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';

 function Footer(){

     return(
        <div className="footer-container">
          © By Deepak_Enterprises
          <div>
            Mobile : <span>9789212772</span>,<span>9080554626</span>,<span>8220488300</span>
          </div>
          <a href='mailto:admin@deepakenterprises.net.in' target='_blank'>
            <EmailIcon className="links"/>
            </a>

           <a href='https://www.deepakenterprises.net.in' target='_blank'>
              <PublicIcon className="links"/>
            </a>
        </div>
     )
 }
 export default Footer;