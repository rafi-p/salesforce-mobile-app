import React from "react";
import { DataVisual, Table } from "../components/index";
import { useHistory } from "react-router-dom";
import "./LastIncentive.css";

function LastIncentive() {
  const history = useHistory();
  function changePage(e, path) {
    e.preventDefault();
    history.push(`/${path}`);
  }
  return (
    <section className="sectionLastIncentive">
      <div className="headerRewards">
        <i
          onClick={(e) => changePage(e, "rewards")}
          className="fas fa-chevron-left"
        ></i>
        <h4>Last Data Incentive</h4>
        <div></div>
      </div>
      <DataVisual />
      <div className="months">
        <p>January</p>
        <p>February</p>
        <p>March</p>
      </div>
      <Table />
    </section>
  );
}

export default LastIncentive;
