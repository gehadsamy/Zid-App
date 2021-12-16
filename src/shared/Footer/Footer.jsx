import { Container } from "react-bootstrap";
import logo from "../../images/footer.png";
import "./footer.scss";

export default function Footer() {

    return(
        <footer className="zid__footer">
            <Container className="footer__container text-center">
            <img className="img-fluid footer_logo" src={logo}></img>

            </Container>
        </footer>
    );

    
};
