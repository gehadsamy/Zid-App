import { Container } from "react-bootstrap";
import logo from "../../images/footer.png";
import "./footer.scss";
import { RiTwitterFill,RiInstagramLine, RiLinkedinFill, RiYoutubeFill} from "react-icons/ri";

export default function Footer() {

    return(
        <footer className="zid__footer">
            <Container className="footer__container text-center pt-5">
                <figure>
                <img className="img-fluid footer_logo" src={logo}></img>

                </figure>

            <div className="social__media">
            <RiYoutubeFill className="ms-5" />

            <RiTwitterFill className="ms-5" />
            <RiInstagramLine  className="ms-5"/> 
            <RiLinkedinFill  className="ms-5"/>

            </div>

            </Container>
        </footer>
    );

    
};
