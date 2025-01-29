import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";

const StyledSVG = styled.svg`
  margin: 1rem;
  circle {
    /* mix-blend-mode: multiply; */
    stroke-width: 0px;
    stroke: rgba(0, 0, 0, 0);
    fill: var(--color-pink-main);
  }

  text {
    font-size: 1rem;
    stroke-linecap: butt;
    stroke-linejoin: miter;
  }
`;

const LegendD3 = ({ data, activeStory }) => {
  const [legendData, setLegendData] = useState();
  // Draw graph
  const visual = useRef();
  const width = 300;
  const height = 150;
  const iconSize = 10;

  const legendItems = [
    "stakeholder",
    "position",
    "place",
    "relationship",
    "possibility",
  ];

  useEffect(() => {
    if (activeStory !== "Positions") {
      const newData = data.nodes.filter((el) => {
        return el.labels[0] === "Possibilities";
      });

      let categories = d3.groups(data.nodes, (d) => d.labels[0]);
      setLegendData(categories);
    } else {
      let categories = d3.groups(data.nodes, (d) => d.properties.position);
      console.log(categories);
      setLegendData(categories);
    }
  }, [data, activeStory]);

  useEffect(() => {
    if (legendData) {
      // Reset to default graph and then do specific things.
      d3.select(visual.current)
        .selectAll(".item")
        .data(legendData)
        .join((enter) => {
          enter
            .append("circle")
            .classed("item", true)
            .attr("id", (d) => `legend${d[0]}`)
            .attr("r", 10)
            .style("fill", (d) => {
              if (activeStory === "Areas") {
                return d[0] === "Area" ? "black" : "var(--color-pink-main)";
              } else {
                return "var(--color-pink-main)";
              }
            })
            .attr("cx", 10)
            .attr("cy", (d, i) => {
              return i * 25 + 10;
            });
        });

      d3.select(visual.current)
        .selectAll("text")
        .data(legendData)
        .join((enter) => {
          enter
            .append("text")
            .classed("text", true)
            .attr("id", (d) => `text${d}`)
            .text((d) => {
              return d[0];
            })
            .attr("x", 25)
            .attr("y", (d, i) => {
              return i * 25 + 15;
            });
        });

      if (activeStory) {
        const positions = d3.group(
          legendData,
          (d) => d[1][0].properties.position
        );
        const colorPositions = d3.scaleOrdinal(positions.values(), [
          "#f1ae23",
          "#ca619d",
          "#5a70c0",
        ]);

        d3.select(visual.current)
          .selectAll(".item")
          .style("fill", (d) => {
            if (activeStory === "Positions") {
              let color = d3.color(colorPositions(d[1][0].properties.position));
              return d[1][0].properties.position ? color : "none";
            } else if (activeStory === "Areas" || activeStory === "Actors") {
              return d[0] === "Area" ? "black" : "var(--color-pink-main)";
            } else {
              return "var(--color-pink-main)";
            }
          });
        //   .attr("r", (d) => {
        //     if (activeStory === "Actors") {
        //       // return d[1]properties.size === "organization"
        //       //   ? iconSize + 10
        //       //   : d.properties.size === "person"
        //       //   ? iconSize - 10
        //       //   : iconSize;
        //       return 10;
        //     } else if (activeStory === "Connections") {
        //       return 20;
        //       // return relationsWeightScale(d.properties.connections + 1);
        //     } else {
        //       return iconSize;
        //     }
        //   });

        d3.select(visual.current)
          .selectAll("text")
          .text((d) => {
            return activeStory === "Positions"
              ? d[1][0].properties.position
              : d[0];
          });
      }
    }
  }, [legendData, activeStory]);

  return (
    <StyledSVG
      ref={(el) => (visual.current = el)}
      width={width}
      height={height}
      viewBox={[0, 0, width, height]}
      style={{ maxWidth: "100%", height: "auto" }}
    >
      {/* {legendItems.map((item, i) => {
        return (
          <g key={item} className="legendItem">
            <circle
              className="item"
              id={item}
              cx={10}
              cy={i * 25 + 10}
              r="10"
            />
            <text x={25} y={i * 25 + 15}>
              {item}
            </text>
          </g>
        );
      })} */}
    </StyledSVG>
  );
};

export default LegendD3;
