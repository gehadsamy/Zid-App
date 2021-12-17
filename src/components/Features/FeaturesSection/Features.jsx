import { Col, Container, Row } from "react-bootstrap";
import MainButton from "../../../shared/Button/MainButton";
import FeaturesCard from "../FeaturesCard/FeaturesCard";
import "./features.scss";

export default function Features() {
    return(
      <section className="Features">
        <Container className="Features__title ">
        <h3>
        التطبيقات المميزة
        </h3>
        <p>
        تطبيقات تقدم حلول وخدمات مميزة نوصي بتجربتها

        </p>
        
       <Container className="d-flex">
        <FeaturesCard/>
        <FeaturesCard/>
        <FeaturesCard/>
        <FeaturesCard/>

      </Container>
<Row className="justify-content-center">
<MainButton className="Features__button" />

</Row>
        </Container>
      
      </section>
 
    );
    
};
