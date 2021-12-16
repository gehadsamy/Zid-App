import { Card, Container } from "react-bootstrap";
import "./featurescard.scss";
export default function FeaturesCard() {

    return(
        <Container className="FeaturesCard">
      <Card style={{ }} className="feature__card">
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
    نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك



نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك
    </Card.Text>
  
  </Card.Body>
</Card>
        </Container>
  
    );
    
};
