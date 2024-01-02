import {useState} from "react";

const UseDistance = () => {
    const [distance, setDistance] = useState()
    const calcDistance = (distance) => {
        console.log(distance)
        const partieInterieure = Math.pow((distance.a - distance.c), 2) + Math.pow((distance.b - distance.d), 2);
        const resultatIntermediaire = Math.sqrt(partieInterieure);
        const resultatFinal = Math.max(Math.ceil(resultatIntermediaire), 0);

        setDistance(resultatFinal);
    }

    return {calcDistance, distance}
}

export default UseDistance;