import React from "react";
import avatar from "../assets/034-medal.png";
import { Table } from "../components/index";
import { useHistory } from "react-router-dom";
import "./CurrentIncentive.css";

function CurrentIncentive() {
  const history = useHistory();
  function changePage(e, path) {
    e.preventDefault();
    history.push(`/${path}`);
  }
  return (
    <section className="sectionCurrentIncentive">
      <div className="headerRewards">
        <i
          onClick={(e) => changePage(e, "rewards")}
          className="fas fa-chevron-left"
        ></i>
        <h4>Current Incentive</h4>
        <div></div>
      </div>
      <div className="content">
        <h4 className="titleMonth">January 2020</h4>
        <div className="monthlyIncentive">
          <div className="cardDetail">
            <img src={avatar} alt="Avatar" className="avatar" />
            <div className="detailText">
              <div className="link-detail">
                <h4>Monthly Incentive</h4>
              </div>
              <h2>Rp 200.000.000</h2>
            </div>
          </div>
        </div>
        <div className="textTargetSales">
          <p>
            Tingkatkan{" "}
            <span className="boldSales">Target Sales Product NBC In Value</span>
            <br />
            Untuk memaksimalkan Incentive Anda
          </p>
        </div>
        <Table />
      </div>
    </section>
  );
}

export default CurrentIncentive;
