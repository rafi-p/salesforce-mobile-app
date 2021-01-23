import React from "react";

import "./CardLearning.css";

function CardLearning(props) {
  const { wajib, button } = props;
  return (
    <div className="cardLearning">
      <h4>{wajib.title}</h4>
      <div className="logoNumber">
        <p>Nilai</p>
        <div className="logo">
          <i class="fas fa-angle-up"></i>
          <p>{wajib.nilai}</p>
        </div>
      </div>
      <button>{button} e-learning</button>
    </div>
  );
}

export default CardLearning;
