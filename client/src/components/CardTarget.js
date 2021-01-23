import React from "react";
import "./CardTarget.css";

function CardTarget(props) {
  const { target } = props;
  function loading(current, target) {
    return (current / target) * 100;
  }

  return (
    <div className="cardDetail">
      <img
        src={process.env.PUBLIC_URL + target.image}
        alt="Avatar"
        className="avatar"
      />
      <div className="detailText">
        <div className="link-detail">
          <p className="bold-title">{target.title}</p>
          <p className="brand-color">Details</p>
        </div>

        {target.type === "count" ? (
          <p>
            <span className="bold-title fontSize">{target.current}</span> /
            {target.target}
          </p>
        ) : (
          <p>
            <span className="bold-title fontSize">
              Rp{target.current.toLocaleString(["ban", "id"])}
            </span>{" "}
            /Rp{target.target.toLocaleString(["ban", "id"])}
          </p>
        )}

        <div className="loading-border">
          <div
            className="bar-grey"
            style={{
              width: `${loading(target.current, target.target)}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CardTarget;
