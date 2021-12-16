import arrow from "../../gif/arrow.gif";
import "./button.scss";


export default function MainButton() {
    return (
        <button className="main__button">تصفح التطبيقات <img src={arrow}></img></button>
    )
    
};
