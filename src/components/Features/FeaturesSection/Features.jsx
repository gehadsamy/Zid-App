import { Col, Container, Row } from "react-bootstrap";
import MainButton from "../../../shared/Button/MainButton";
import FeaturesCard from "../FeaturesCard/FeaturesCard";
import "./features.scss";

export default function Features() {
    return(
      <section className="Features">
        <Container className="Features__title text-center">
        <h3>
        التطبيقات المميزة
        </h3>
        <p>
        تطبيقات تقدم حلول وخدمات مميزة نوصي بتجربتها

        </p>
        </Container>
      
       <Row>
        <Col><FeaturesCard/></Col>
        <Col><FeaturesCard/></Col>
        <Col><FeaturesCard/></Col>
        <Col><FeaturesCard/></Col>

      </Row>

      <MainButton className="" />
      </section>
 
    );
    
};
