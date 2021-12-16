import NavBar  from "../../shared/NavBar/NavBar";
import { FaArrowUp } from 'react-icons/fa';
import "./Homepage.scss";
import Header from "../Header/Header";
import AppsReview from "../AppsReview/AppsReview";



export default function Homepage() {
    return (
        <div className="homepage">

            <Header/>
            <AppsReview/>
            <a href="#header" className="btn-scrollup"><FaArrowUp/></a>
        </div>
    )
}