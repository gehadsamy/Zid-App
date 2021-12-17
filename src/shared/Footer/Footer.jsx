import { Container } from "react-bootstrap";
import logo from "../../images/footer.png";
import "./footer.scss";
import {
  RiTwitterFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiYoutubeFill,
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="zid__footer">
      <Container className="footer__container text-center pt-5">
        <figure>
          <img className="img-fluid footer_logo" src={logo}></img>
        </figure>

        <div className="social__media">
          <a  href="https://www.youtube.com/channel/UCcPU3vP1sTR4f1zupXGYa8Q" target="_blank">
            <RiYoutubeFill className="ms-5" />
          </a>
          <a href="https://twitter.com/zidappcom" target="_blank">
          <RiTwitterFill className="ms-5" />
          </a>
         
          <a  href="https://www.instagram.com/zidappcom/" target="_blank">
              
          <RiInstagramLine className="ms-5" />
          </a>

          <a  href="https://www.linkedin.com/company/zidapp/" target="_blank">
          <RiLinkedinFill className="ms-5" />

          </a>

        </div>
      </Container>
    </footer>
  );
}
