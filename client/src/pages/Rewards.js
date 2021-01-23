import React, { useEffect } from "react";
import { CardRewards } from "../components/index";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RewardsData } from "../store/index";
import "./Rewards.css";

function Rewards() {
  const dispatch = useDispatch();
  const history = useHistory();
  function changePage(e, path) {
    e.preventDefault();
    if (path === "dashboard") {
      history.push(`/${path}`);
    } else {
      history.push(`/rewards/${path}`);
    }
  }

  const dataRewards = useSelector((state) => state.rewards.data);
  const loadingRewards = useSelector((state) => state.rewards.loading);
  const errorRewards = useSelector((state) => state.rewards.error);

  console.log(dataRewards);

  useEffect(() => {
    dispatch(RewardsData(`http://localhost:4000/rewards`));
  }, [dispatch]);
  if (errorRewards) {
    return <div>{errorRewards}</div>;
  }
  if (loadingRewards) {
    return (
      <div className="loadingScreen">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <section className="sectionRewards">
      <div className="headerRewards">
        <i
          onClick={(e) => changePage(e, "dashboard")}
          className="fas fa-chevron-left"
        ></i>
        <h4>Rewards</h4>
        <i className="fas fa-mobile"></i>
      </div>

      <div className="rewards">
        {dataRewards &&
          dataRewards.map((reward) => {
            return <CardRewards key={reward.id} reward={reward} />;
          })}
      </div>
    </section>
  );
}

export default Rewards;
