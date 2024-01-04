import {useForm} from "react-hook-form";
import UseDistance from "../../Hooks/Distance.jsx";
import "./Distance.css";

const Distance = () => {
    const {calcDistance, distance} = UseDistance()
    const {register, handleSubmit} = useForm();

    const onSubmit = (d) => {
        calcDistance(d)
    }

    console.log(distance)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={"position"}>
                <label>Position du village a</label>
                <div>
                    <input className={"position_input"} {...register("a")} min={"0"} type="number"/>
                    <input className={"position_input"} {...register("b")} min={"0"} type="number"/>
                </div>
            </div>
            <div className={"position"}>
                <label>Position du village b</label>
                <div>
                    <input className={"position_input"} {...register("c")} min={"0"} type="number"/>
                    <input className={"position_input"} {...register("d")} min={"0"} type="number"/>
                </div>
            </div>

            {distance !== undefined ? <p>La distance est de : {distance}km </p> : ""}
            <button className={"button"} type="submit">Calculer</button>
        </form>
    )
}

export default Distance;