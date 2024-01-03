import {useForm} from "react-hook-form";
import {useState} from "react";

const Hopital = () => {
    const [timeHopital, setTimeHopital] = useState([])
    const {register, handleSubmit} = useForm();

    const soustractionSec = (heure) => {
        const hours = parseInt(heure?.heure, 10);
        const minutes = parseInt(heure?.minute, 10);
        const seconds = parseInt(heure?.seconde, 10);
        const heures_jeu = parseInt(heure?.heures, 10)
        const minute_jeu = parseInt(heure?.minutes, 10)
        const secondes_jeu = parseInt(heure?.secondes, 10)
        const time = hours * 3600 + minutes * 60 + seconds;
        const timeJeu = heures_jeu * 3600 + minute_jeu * 60 + secondes_jeu;
        console.log(timeJeu)
        const diff = 86400 - time;
        const result = timeJeu - diff;
        return result;
    }

    const onSubmit = (d) => {
        let time = soustractionSec(d);
        let heures = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let secondesRestantes = Math.floor(time % 60);
        if(heures < 10) {
            heures = `0${heures}`;
        } else if (minutes < 10) {
            minutes = `0${minutes}`
        } else if (secondesRestantes < 10) {
            secondesRestantes = `0${secondesRestantes}`
        }

        console.log(minutes)
        setTimeHopital(current => [...current, {h: heures, m: minutes, s: secondesRestantes}])
    }

    console.log(timeHopital)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label >Heure du jeu</label>
                <div>
                    <input {...register('heures')} min={"0"} max={"23"} type="number"/><span>:</span><input {...register('minutes')} min={"0"} max={"59"} type="number" /><span>:</span><input {...register('secondes')} min={"0"} max={"59"} type="number" />
                </div>
            </div>
            <div>
                <label>Temps restant sur l'hôpital</label>
                <div>
                    <input {...register('heure')} min={"0"} max={"23"} type="number"/><span>:</span><input {...register('minute')} min={"0"} max={"59"} type="number"/><span>:</span><input
                    {...register('seconde')} min={"0"} max={"59"} type="number"/>
                </div>
            </div>

            {timeHopital.length !== 0 && <p>Heure d'attaque: {timeHopital[timeHopital.length -1].h}:{timeHopital[timeHopital.length -1].m}:{timeHopital[timeHopital.length -1].s}</p>}

            <button type={"submit"}>Calculer</button>
        </form>
    )
}

export default Hopital;