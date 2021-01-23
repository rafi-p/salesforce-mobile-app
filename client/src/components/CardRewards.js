import React from "react";
import { useHistory } from "react-router-dom";
import "./CardRewards.css";

function CardRewards(props) {
  const { reward } = props;
  const history = useHistory();

  function changePage(e, path) {
    e.preventDefault();
    if (path === "dashboard") {
      history.push(`/${path}`);
    } else {
      history.push(`/rewards/${path}`);
    }
  }
  return (
    <div onClick={(e) => changePage(e, reward.path)} className="cardDetail">
      <div className="detailText">
        <div className="link-detail">
          <p>{reward.title}</p>
        </div>
        <p>{reward.overview}</p>
      </div>
      <div className="imageContainer">
        <img
          src={process.env.PUBLIC_URL + reward.image}
          alt="Avatar"
          className="avatar"
        />
      </div>
    </div>
  );
}

export default CardRewards;
