// @ts-nocheck
/* eslint-disable no-unused-vars */
import { useState } from "react";

const baseNavale = {
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
  16: 61,
  17: 51,
  18: 41,
  19: 31,
  20: 21,
};

const UseCalcule = () => {
  const [data, setData] = useState();
  const [times, setTimes] = useState([]);

  const convertTime = (data) => {
    const hours = parseInt(data?.heure, 10);
    const minutes = parseInt(data?.minute, 10);
    const seconds = parseInt(data?.seconde, 10);
    const timeSeconds = Math.ceil(
      hours * 3600 +
        minutes * 60 +
        seconds +
        baseNavale[data?.base_navale] * Number(data?.distance)
    );

    const timeSecondsWithPo = Math.ceil(
      hours * 3600 +
        minutes * 60 +
        seconds +
        (baseNavale[data?.base_navale] / 2) * Number(data?.distance)
    );

    secondsInTime(timeSeconds);
    secondsInTime(timeSecondsWithPo);
  };

  const secondsInTime = (seconds) => {
    let heures = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secondesRestantes = Math.floor(seconds % 60);

    if (heures < 10) {
      heures = `0${heures}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (secondesRestantes < 10) {
      secondesRestantes = `0${secondesRestantes}`;
    }

    setTimes((current) => [
      ...current,
      { heure: heures, minute: minutes, secondes: secondesRestantes },
    ]);
  };

  return [setData, convertTime, times];
};

export default UseCalcule;
