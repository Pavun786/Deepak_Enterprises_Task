import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Content from './Component/Content/Content';
import IntroductionLetter from './Component/IntroductionLetter/IntroductionLetter';
import Home from './Component/Home/Home';
import AboutUs from './Component/AboutUs/AboutUs';
import Office from './Component/Office/Office';
import Mission from './Component/Mission/Mission';
import WeProvide from './Component/WeProvide/WeProvide';
import Services from './Component/Services/Services';
import Welfare from './Component/Welfare/Welfare';
import StatutoryRequirements from './Component/StatutoryRequirements/StatutoryRequirements';
import WelfareCommon from './Component/WelfareCommon/WelfareCommon';
import Safety from './Component/Safety/Safety';
import Communication from './Component/Communication/Communication';
import Footer from './Component/Footer/Footer';
import ScrollToTop from './Component/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Content />
      <IntroductionLetter />
      <AboutUs />
      <Office />
      <Mission />
      <WeProvide />
      <Services />
      <Welfare />
      <StatutoryRequirements />
      <WelfareCommon />
      <Safety />
      <Communication />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
