import { Container } from "react-bootstrap";
import MainButton from "../../shared/Button/MainButton";
import "./header.scss";
import banner from "../../gif/banner.gif";
import Pattern from "../../images/Pattern.png";

import Ellipse from "../../images/Ellipse.png";
import NavBar from "../../shared/NavBar/NavBar";

export default function Header() {
  return (
    <section className="header mt-5 mb-5">
        <NavBar/>
      <Container className="header__container text-center">
        <h1>طور متجرك ووسع آفاق تجارتك مع سوق تطبيقات زد</h1>
        <p className="header__content w-50 m-auto mt-1 mb-4">
          طور تجارتك من خلال تطبيقات وحلول سوق تطبيقات زد التي تساعدك في نمو
          أرباحك عبر إدارة عمليات متجرك بشكل فعال واحترافي
        </p>
        <MainButton className="" />
        <div className="banner__container">
        <img className="img-fluid banner" src={banner}></img>

            <img className="img-fluid Pattern" src={Pattern}></img>
      
      
            <img className="img-fluid Ellipse" src={Ellipse}></img>
     
   
  
        </div>
      </Container>
    </section>
  );
}
