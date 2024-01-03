import {useForm} from "react-hook-form";
import UseDistance from "../../Hooks/Distance.jsx";

const Distance = () => {
    const {calcDistance, distance} = UseDistance()
    const {register, handleSubmit} = useForm();

    const onSubmit = (d) => {
        calcDistance(d)
    }

    console.log(distance)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Position du village a</label>
                <input {...register("a")} min={"0"} type="number"/>
                <input {...register("b")} min={"0"} type="number"/>
            </div>
            <div>
                <label>Position du village b</label>
                <input {...register("c")} min={"0"} type="number"/>
                <input {...register("d")} min={"0"} type="number"/>
            </div>

            {distance !== undefined ? <p>La distance est de : {distance}km </p> : ""}
            <button type="submit">Calculer</button>
        </form>
    )
}

export default Distance;