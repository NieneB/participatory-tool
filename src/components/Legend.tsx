import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";

const StyledSVG = styled.svg`
  margin: 1rem;
  circle {
    /* mix-blend-mode: multiply; */
    stroke-width: 0px;
    stroke: rgba(0, 0, 0, 0);
    fill: var(--color-pink);
  }

  text {
    font-size: 1rem;
    stroke-linecap: butt;
    stroke-linejoin: miter;
  }
`;

const LegendD3 = ({ activeStory }) => {
  // Draw graph
  const visual = useRef();
  const width = 150;
  const height = 150;
  const iconSize = 30;

  const legendItems = [
    "stakeholder",
    "position",
    "place",
    "relationship",
    "possibility",
  ];

  useEffect(() => {
    console.log(activeStory);
    // Reset to default graph and then do specific things.

    if (activeStory === "Stakeholders") {
      d3.select(visual.current)
        .selectAll(".nodes")
        .transition()
        .attr("r", (d) => {
          return d.properties.size === "organization"
            ? iconSize + 10
            : d.properties.size === "person"
            ? iconSize - 10
            : iconSize;
        });
    }
  }, [activeStory]);

  return (
    <StyledSVG
      ref={(el) => (visual.current = el)}
      width={width}
      height={height}
      viewBox={[0, 0, width, height]}
      style={{ maxWidth: "100%", height: "auto" }}
    >
      {legendItems.map((item, i) => {
        return (
          <g key={item} className="legendItem">
            <circle
              className="item"
              id={item}
              cx={10}
              cy={i * 25 + 10}
              r="10"
            />
            <text x={25} y={(i * 25) + 15}>
              {item}
            </text>
          </g>
        );
      })}
    </StyledSVG>
  );
};

export default LegendD3;
