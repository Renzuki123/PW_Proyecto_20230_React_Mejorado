import TopNav from '../Global/TopNav';
//import Logo from '../../images/logo/logo.jpg'
import Logo from '../images/logo/logo.jpg'
import b1 from '../images/bembos_oferta01.png'
import sb from '../images/sb_oferta01.jpg'
import pj from '../images/pj_oferta01.jpg'
import { Link } from "react-router-dom"

function MainPage(){
    return <div>
        
        <center><img src={Logo} className="centered" style={{width: "15%"}} alt="logo" /></center>
        <TopNav category={0}/>

        <div class="Ofertas">
            <center><h2>Our most popular promotions</h2></center>
            <img src={b1} style={{width: "30%"}} alt="referencia" />
            <img src={sb} style={{width: "30%"}} alt="referencia" />
            <img src={pj} style={{width: "30%"}} alt="referencia" />
        </div>
        
    </div>
}

export default MainPage