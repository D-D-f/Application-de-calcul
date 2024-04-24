import UseCalcule from "../../Hooks/Calcule.jsx";
import { useForm } from "react-hook-form";
import Heures from "../../Component/Heures.jsx";
import "./Retour.css";

const Retour = () => {
  const [setData, convertTime, times] = UseCalcule();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setData(data);
    convertTime(data);
  };

  return (
    <form className={"form_retour"} onSubmit={handleSubmit(onSubmit)}>
      <div className="block_input">
        <label>Heure d'attaque</label>
        <div className={"input_retour"}>
          <input
            {...register("heure")}
            className="time"
            type="number"
            min="0"
            max="23"
          />
          <span>:</span>
          <input
            {...register("minute")}
            className="time"
            type="number"
            min="0"
            max="59"
          />
          <span>:</span>
          <input
            {...register("seconde")}
            className="time"
            type="number"
            min="0"
            max="59"
          />
        </div>
      </div>
      <div className="block_input">
        <label>Base Navale </label>
        <input
          {...register("base_navale")}
          className="basenavale"
          type="number"
          min="1"
          max="20"
        />
      </div>
      <div className="block_input">
        <label>Distance </label>
        <input {...register("distance")} className="km" type="number" min="1" />
      </div>
      <div className="block_input">
        <label htmlFor="beforetime">
          Ancien temps de la base navale, à partir du niveau 16 il faut le
          cocher
        </label>
        <input type="checkbox" {...register("beforetime")} />
      </div>

      {times.length !== 0 && <Heures heures={times} />}
      <button className={"button"} type="submit">
        Calculer
      </button>
    </form>
  );
};

export default Retour;
