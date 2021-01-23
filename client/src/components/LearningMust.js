import React, { useEffect } from "react";
import { CardLearning } from "./index";
import { useSelector, useDispatch } from "react-redux";
import { Wajib } from "../store/index";

function LearningMust() {
  const dispatch = useDispatch();

  const dataWajib = useSelector((state) => state.wajib.data);
  const loadingWajib = useSelector((state) => state.wajib.loading);
  const errorWajib = useSelector((state) => state.wajib.error);

  console.log(dataWajib);

  useEffect(() => {
    dispatch(Wajib(`http://localhost:4000/wajib`));
  }, [dispatch]);
  if (errorWajib) {
    return <div>{errorWajib}</div>;
  }
  if (loadingWajib) {
    return (
      <div className="loadingScreen">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="contentLearning">
      {dataWajib &&
        dataWajib.map((wajib) => {
          return <CardLearning key={wajib.id} wajib={wajib} button="Akses" />;
        })}
    </div>
  );
}

export default LearningMust;
