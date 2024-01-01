/* eslint-disable no-unused-vars */
// @ts-nocheck
/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import "./Home.css";
import UseCalcule from "../../Hooks/Calcule";
import Heures from "../../Component/Heures";
import { useState } from "react";

const Home = () => {
  const [setData, convertTime, times] = UseCalcule();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setData(data);
    convertTime(data);
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="block_input">
          <label>Heure d'attaque </label>
          <div>
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
          <input
            {...register("distance")}
            className="km"
            type="number"
            min="1"
          />
        </div>
        {times.length !== 0 && <Heures heures={times} />}
        <button type="submit">Calculer</button>
      </form>
    </div>
  );
};

export default Home;
