import React from "react";
import "./Table.css";

function Table() {
  return (
    <div className="table">
      <table align="center">
        <tr className="backTableColor">
          <th rowSpan="2" width="50%">
            KPI Incentive Monthly
          </th>
          <th colSpan="3">Kalkulator</th>
        </tr>
        <tr className="backTableColor" align="center">
          <td className="subHeader">Active</td>
          <td className="subHeader">Gradasi</td>
          <td className="subHeader">Intensif</td>
        </tr>
        <tr className="backColorBold">
          <td>Sales</td>
          <td className="fontLittle"></td>
          <td className="fontLittle"></td>
          <td className="fontLittle">921.250</td>
        </tr>
        <tr>
          <td>Target Sales In Value</td>
          <td className="fontLittle">90%</td>
          <td className="fontLittle">50%</td>
          <td className="fontLittle">343.750</td>
        </tr>
        <tr>
          <td>Target Sales All Product Non Dot in value</td>
          <td className="fontLittle">110%</td>
          <td className="fontLittle">110%</td>
          <td className="fontLittle">302.500</td>
        </tr>
        <tr>
          <td>Target Sales Product NBC in value</td>
          <td className="fontLittle">70%</td>
          <td className="fontLittle">0%</td>
          <td className="fontLittle">-</td>
        </tr>
        <tr className="backColorBold">
          <td>Operation Excellent</td>
          <td className="fontLittle"></td>
          <td className="fontLittle"></td>
          <td className="fontLittle">550.000</td>
        </tr>
        <tr>
          <td>Target Active Account</td>
          <td className="fontLittle">100%</td>
          <td className="fontLittle">100%</td>
          <td className="fontLittle">275.000</td>
        </tr>
        <tr>
          <td>Target Call (Kunjungan SMR)</td>
          <td className="fontLittle">100%</td>
          <td className="fontLittle">100%</td>
          <td className="fontLittle">275.000</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
