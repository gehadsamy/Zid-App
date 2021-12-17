import { Card, Col, Container, Row } from "react-bootstrap";
import app from "../../../images/app.png";
import rate from "../../../images/rate.png";

import "./featurescard.scss";
export default function FeaturesCard() {
  return (
    <Col  className="FeaturesCard m-2">
      <Card style={{}} className="feature__card ">
        <Card.Body>
          <div className="d-flex">
            <figure className="app-img">
              <img className="img-fluid app" src={app}></img>
            </figure>

            <div>
              <span>قمرة</span>
              <img className="img-fluid rate" src={rate}></img>
              <p className="Card__title m-0"> 
              <span className="Card__title1" >تطوير :</span>
              <span className="Card__title2" > عمر برهوم</span>
             
              </p>
              <p className="Card__content mt-2">
                نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الأمثل
                الذي يمكنك من رفع مبيعاتك
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
