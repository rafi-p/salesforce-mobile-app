import React, { useEffect } from "react";
import avatar from "../assets/img_avatar2.png";
import { CardTarget, DataVisual } from "../components/index";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Target } from "../store/index";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  function changePage(e, path) {
    e.preventDefault();
    history.push(`/${path}`);
  }

  const dataTarget = useSelector((state) => state.target.data);
  const loadingTarget = useSelector((state) => state.target.loading);
  const errorTarget = useSelector((state) => state.target.error);

  console.log(dataTarget);

  useEffect(() => {
    dispatch(Target(`http://localhost:4000/target`));
  }, [dispatch]);
  if (errorTarget) {
    return <div>{errorTarget}</div>;
  }
  // if (loadingTarget) {
  //   return <div>Loading...</div>;
  // }
  return (
    <section className="sectionHome">
      <nav>
        <div>
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>
        <div className="iconHome">
          <i className="fas fa-comment-alt"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </nav>
      <div className="titleHome">
        <h3>Welcome back, Adi Susanto!</h3>
        <div className="logoTitle">
          <div className="logoInfo">
            <i className="fas fa-user-alt"></i>
            <p>Sales</p>
          </div>
          <div className="logoInfo">
            <i className="fas fa-city"></i>
            <p>Kalimalang</p>
          </div>
          <div className="logoInfo">
            <i className="fas fa-map-marker-alt"></i>
            <p>DKI Jakarta</p>
          </div>
        </div>
      </div>
      <div className="backgroundTitleHome">
        <div className="container-navigation">
          <div className="logoNav">
            <i className="fas fa-briefcase"></i>
            <p>Career Path</p>
          </div>
          <div onClick={(e) => changePage(e, "learning")} className="logoNav">
            <i className="fas fa-book-open"></i>
            <p>Learning Class</p>
          </div>
          <div className="logoNav">
            <i className="fas fa-trophy"></i>
            <p>Achievement</p>
          </div>
          <div onClick={(e) => changePage(e, "rewards")} className="logoNav">
            <i className="fas fa-dollar-sign"></i>
            <p>Rewards</p>
          </div>
          <div className="logoNav">
            <i className="fas fa-bullhorn"></i>
            <p>Announcement</p>
          </div>
        </div>
      </div>
      <div className="calendar">
        <i className="far fa-calendar-alt"></i>
        <p>12/01/2020 - 12/03/2020</p>
      </div>
      <div className="target">
        <h3>Target</h3>
        {loadingTarget ? (
          <div className="loadingScreen">
            <p>Loading...</p>
          </div>
        ) : (
          dataTarget &&
          dataTarget.map((target) => {
            return <CardTarget key={target.id} target={target} />;
          })
        )}
      </div>

      <h3 className="dataVisualText">FBO3X</h3>
      <DataVisual />
    </section>
  );
}

export default Home;
