import "./Navigation.css";
import {Link} from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to={"/"}>Retour</Link></li>
                <li><Link to={"/distance"}>Calculer la distance</Link></li>
                <li><Link to={"/hopital"}>Hopital</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;