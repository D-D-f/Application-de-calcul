/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck

const Heures = ({ heures }) => {
  return (
    <div>
      <p>
        Heure d'arrivée sans PO :{" "}
          <button className={"btn_retour"} onClick={() => navigator.clipboard.writeText(`Heure d'arrivée sans PO : ${heures[heures.length - 2].heure}:${
              heures[heures.length - 2].minute
          }:${heures[heures.length - 2].secondes}`)}>
              {`${heures[heures.length - 2].heure}:${
                  heures[heures.length - 2].minute
              }:${heures[heures.length - 2].secondes}`}
          </button>
      </p>

        Heure d'arrivée avec PO :{" "}
          <button className={"btn_retour"} onClick={() => navigator.clipboard.writeText(`Heure d'arrivée avec PO : ${heures[heures.length - 1].heure}:${
              heures[heures.length - 1].minute
          }:${heures[heures.length - 1].secondes}`)}>
              {`${heures[heures.length - 1].heure}:${
                  heures[heures.length - 1].minute
              }:${heures[heures.length - 1].secondes}`}
          </button>
    </div>
  );
};

export default Heures;
