import React, { useState } from "react";
import { VictoryChart, VictoryZoomContainer, VictoryLine } from "victory";
import "./DataVisual.css";

function DataVisual() {
  const [selectedDomain, setSelectedDomain] = useState({});
  const [zoomDomain, setZoomDomain] = useState({});

  function handleZoom(domain) {
    setSelectedDomain(domain.target);
  }

  function handleBrush(domain) {
    setZoomDomain(domain.target);
  }
  return (
    <div className="dataVisual">
      <VictoryChart
        width={350}
        height={300}
        scale={{ x: "time" }}
        containerComponent={
          <VictoryZoomContainer
            responsive={false}
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={(e) => handleZoom(e)}
          />
        }
      >
        <VictoryLine
          style={{
            data: { stroke: "tomato" },
          }}
          data={[
            { x: new Date(2011, 1, 1), y: 125 },
            { x: new Date(2012, 1, 1), y: 257 },
            { x: new Date(2013, 1, 1), y: 345 },
            { x: new Date(2016, 1, 1), y: 515 },
            { x: new Date(2017, 1, 1), y: 132 },
            { x: new Date(2018, 1, 1), y: 305 },
            { x: new Date(2019, 1, 1), y: 270 },
            { x: new Date(2020, 1, 1), y: 470 },
          ]}
        />
      </VictoryChart>
    </div>
  );
}

export default DataVisual;
