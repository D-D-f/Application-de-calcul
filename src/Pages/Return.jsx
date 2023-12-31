import { useState } from "react";
import "./Return.css";
import { useForm } from "react-hook-form";

const Return = () => {
  const [hours, SetHours] = useState([]);
  const { register, handleSubmit } = useForm();

  const bn = {
    1: 185,
    2: 177,
    3: 170,
    4: 162,
    5: 155,
    6: 147,
    7: 140,
    8: 133,
    9: 126,
    10: 115,
    11: 104,
    12: 92,
    13: 85,
    14: 77,
    15: 69,
    16: 55,
    17: 37,
    18: 23,
    19: 13,
    20: 7,
  };

  const secondesEnTemps = (secondes, secondesPO) => {
    let heures = Math.floor(secondes / 3600);
    let minutes = Math.floor((secondes % 3600) / 60);
    let secondesRestantes = secondes % 60;

    let heuresPO = Math.floor(secondesPO / 3600);
    let minutesPO = Math.floor((secondesPO % 3600) / 60);
    let secondesRestantesPO = secondesPO % 60;

    SetHours({
      heures: heures,
      minutes: minutes,
      secondes: secondesRestantes,
      heuresPo: heuresPO,
      minutesPo: minutesPO,
      secondesPo: secondesRestantesPO,
    });
  };

  const onSubmit = (d) => {
    const time = d.time.split(":");
    const heures = parseInt(time[0], 10);
    const minutes = parseInt(time[1], 10);
    const secondes = parseInt(time[2], 10);
    const timeSeconds =
      heures * 3600 +
      minutes * 60 +
      secondes +
      bn[d.basenavale] * Number(d["km"]);

    const timeSecondsPO =
      heures * 3600 +
      minutes * 60 +
      secondes +
      (Math.ceil(bn[d.basenavale]) / 2) * Number(d["km"]);

    secondesEnTemps(timeSeconds, timeSecondsPO);
  };

  console.log(hours);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="containerInput">
          <label htmlFor="">Heure d'attaque </label>
          <input
            {...register("time")}
            className="inputTime"
            type="time"
            step="1"
            format="yyyy-MM-dd HH:mm:ss"
          />
        </div>

        <div className="containerInput">
          <label htmlFor="">Base Navale</label>
          <input
            {...register("basenavale")}
            className="inputnumber"
            type="number"
            min="1"
            max="20"
          />
        </div>

        <div className="containerInput">
          <label htmlFor="">Nombre de KM</label>
          <input
            {...register("km")}
            className="inputnumber"
            type="number"
            min="1"
          />
        </div>

        <input className="inputnumber" type="submit" value="Calculer" />
      </form>
      <p>
        Heure du retour sans ticket :
        {hours.length !== 0
          ? `${hours.heures}heures ${hours.minutes}minutes ${hours.secondes}secondes`
          : ""}
      </p>
      <p>
        Heure du retour avec ticket :{" "}
        {hours.length !== 0
          ? `${hours.heuresPo}heures ${hours.minutesPo}minutes ${hours.secondesPo}secondes`
          : ""}
      </p>
    </div>
  );
};

export default Return;
