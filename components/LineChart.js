import React from "react";
import { Dimensions } from "react-native";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  Tooltip,
} from "react-native-responsive-linechart";

export default function LineChart({ data }) {
  const beginX = new Date().getTime() - 1000 * 60 * 60;
  const getMinX = (data) => {
    let min = new Date().getTime();
    for (const point of data) {
      min = Math.min(point.x, min);
    }
    return min;
  };
  const getMaxX = (data) => {
    let max = 0;
    for (const point of data) {
      max = Math.max(point.x, max);
    }
    return max;
  };

  const getMaxY = (data) => {
    let max = 0;
    for (const point of data) {
      max = Math.max(point.y, max);
    }
    return max;
  };

  return (
    <Chart
      style={{
        height: 250,
        width: Dimensions.get("window").width,
        left: "-15%",
      }}
      data={data}
      padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
      xDomain={{
        min: getMinX(data),
        max: getMaxX(data),
      }}
      yDomain={{ min: 0, max: getMaxY(data) * 1.2 }}
    >
      {/* <HorizontalAxis
        theme={{
          axis: { visible: false },
          grid: {
            visible: false,
          },
          ticks: { visible: false },
        }}
        tickCount={5}
      /> */}
      <Area
        theme={{
          gradient: {
            from: { color: "#8CB4ED" },
            to: { color: "#F2F3F7", opacity: 0.5 },
          },
        }}
      />
      <Line
        theme={{
          stroke: { color: "#8CB4ED", width: 5 },
          scatter: {
            default: { width: 8, height: 8, rx: 4, color: "#8CB4ED" },
            selected: { color: "#276DD4" },
          },
        }}
        tooltipComponent={<Tooltip theme={{ formatter: ({ y }) => y }} />}
      />
    </Chart>
  );
}
