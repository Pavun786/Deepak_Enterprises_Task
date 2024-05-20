import '../IntroductionLetter/IntroductionLetter.css'
import letter from "../../Assets/Intro letter.png"

  function IntroductionLetter(){
      return(
        <>
         <div className='intro-title'>Introduction-Letter</div>
        <div className="intro-container">
           
             <img src={letter} className='intro-letter'/>
             <div className='intro-sub2'>
             <div>To:</div>
             <div>
                <p>Dear sir,</p>
                <p>sub: Supply of skilled & unskilled Laborers and Outstanding Services.</p>
                <p>With globalization, the focus of business has changed and the aim
                 today is good quality, at less Cost and timely delivery. Competition has
                 become so severe that all comers are cut to reduce cost and make the final
                 product as cheaper as possible</p>
                 <p>
                 One such recourses adopted to cost saving without compromising
                 quality is outsourcing. It is here, we are ready to extend our arm to procure
                 quality manpower at reasonable cost - an area which not only contributes to a
                 lions share in the cost of production, but also keeps on increasing over the
                 years and causes unnecessary stress at times. On the delivery part all we
                 need is maximum two days notice to supply you the type of manpower required. 
                 </p>
                 <p>
                 we are a registered contractor who are presently operating in the
                 Districts of Tiruvallur and Ananthapur Kancheepuram by providing Manpower
                 from House keeping to Office staff - (both Sex) to more than 2 companies
                 our clients vary from Automobile, Engineering and Chemical industry and many more
                 </p>
                 <p>
                 we request you to spare a few minutes of your valuable time and go
                 through this brochure, which will help you to gain an insight of our company
                 and call us for a detailed discussion on your requirement and how can we be
                of use to you, and mutually benefit. 
                 </p>
                 <div>Looking forward to an opportunity to serve you</div>
                 <p>Thanking you,</p>
                 <p>Yours faithfully,</p>
                 <div>
                 For DEEPAK ENTERPRISES 
                 <div>Authorised Signatory </div>
                 </div>
             </div>
             </div>
        </div>
        </>
      )
  }
  export default IntroductionLetter;