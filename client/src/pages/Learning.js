import React from "react";
import { LearningMust, LearningOpt } from "../components/index";
import {
  useHistory,
  useRouteMatch,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import "./Learning.css";

function Learning() {
  const history = useHistory();
  function changePage(e, path) {
    e.preventDefault();
    history.push(`/${path}`);
  }
  let { path, url } = useRouteMatch();

  return (
    <section className="sectionLearning">
      <div className="headerRewards">
        <i
          onClick={(e) => changePage(e, "dashboard")}
          className="fas fa-chevron-left"
        ></i>
        <h4>Learning Class</h4>
        <div></div>
      </div>
      <div className="tab">
        <Link to={`${url}/wajib`}>Wajib</Link>
        <Link to={`${url}/optional`}>Optional</Link>
      </div>
      <Switch>
        <Route path={`${path}/wajib`}>
          <LearningMust />
        </Route>
        <Route path={`${path}/optional`}>
          <LearningOpt />
        </Route>
        <Route component={LearningMust} />
      </Switch>
    </section>
  );
}

export default Learning;
