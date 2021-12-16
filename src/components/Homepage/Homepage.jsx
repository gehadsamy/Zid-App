import NavBar  from "../../shared/NavBar/NavBar";
import { FaArrowUp } from 'react-icons/fa';
import "./Homepage.scss";
import Header from "../Header/Header";
import AppsReview from "../AppsReview/AppsReview";

import Footer from "../../shared/Footer/Footer";
import Features from "../Features/FeaturesSection/Features";


export default function Homepage() {
    return (
        <div className="homepage">
            <a href="#header" className="btn-scrollup"><FaArrowUp/></a>

            <Header/>
            <AppsReview/>
            <Features/>
            <Footer/>
            <a href="#header" className="chat-scrollup"><FaArrowUp/></a>

        </div>
    )
}