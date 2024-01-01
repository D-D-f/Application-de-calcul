/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck
const Heures = ({ heures }) => {
  return (
    <div>
      <p>
        Heure d'arrivée sans PO :{" "}
        {`${heures[0].heure}:${heures[0].minute}:${heures[0].secondes}`}
      </p>
      <p>
        Heure d'arrivée avec PO :{" "}
        {`${heures[1].heure}:${heures[1].minute}:${heures[1].secondes}`}
      </p>
    </div>
  );
};

export default Heures;
