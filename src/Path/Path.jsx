import {Routes, Route} from "react-router-dom";
import Retour from "../Pages/Retour/Retour.jsx";
import Hopital from "../Pages/Hopital/Hopital.jsx";
import Distance from "../Pages/Distance/Distance.jsx";

const Path = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Retour />} />
            <Route path={"/distance"} element={<Distance />} />
            <Route path={"/hopital"} element={<Hopital />}/>
        </Routes>
    )
}

export default Path;