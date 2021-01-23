import React, { useEffect } from "react";
import { CardLearning } from "./index";
import { useSelector, useDispatch } from "react-redux";
import { Optional } from "../store/index";

function LearningOpt() {
  const dispatch = useDispatch();

  const dataOpt = useSelector((state) => state.optional.data);
  const loadingOpt = useSelector((state) => state.optional.loading);
  const errorOpt = useSelector((state) => state.optional.error);

  console.log(dataOpt);

  useEffect(() => {
    dispatch(Optional(`http://localhost:4000/opsional`));
  }, [dispatch]);
  if (errorOpt) {
    return <div>{errorOpt}</div>;
  }
  if (loadingOpt) {
    return (
      <div className="loadingScreen">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="contentLearning">
      {dataOpt &&
        dataOpt.map((opt) => {
          return <CardLearning key={opt.id} wajib={opt} button="Request" />;
        })}
    </div>
  );
}

export default LearningOpt;
