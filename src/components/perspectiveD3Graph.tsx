import { useRef, useEffect } from "react";
import * as d3 from "d3";
import styled from "styled-components";

const StyledSVG = styled.svg`
  /* font-family: "Inter"; */
  font-size: 0.5rem;
  > g,
  .node-circle {
    mix-blend-mode: multiply;
  }
  > g,
  .node-circle:hover {
    stroke-width: 8px !important;
    transition-duration: 0.1s;
    transition-timing-function: ease-in ease-out;
  }
`;

const PositionsGraphD3 = ({ data, toggleInfo, inputWidth, inputHeight }) => {
  const visualPositions = useRef();
  const dataNodes = data.nodes;
  const dataLinks = data.links;

  const width = inputWidth || 100;
  const height = inputHeight || 100;
  const color = d3.scaleOrdinal([
    "#ca619d",
    "#5a70c0",
    "#f1ae23",
  ]);

  const simulation = d3
    .forceSimulation()
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    .force("collision", d3.forceCollide().radius(20))
    // .force("charge", d3.forceManyBody().strength(-150))
    ;

  useEffect(() => {
    const svg = d3
      .select(visualPositions.current)
      .attr("width", "100%")
      .attr("height", "50vh")
      .attr("viewBox", [-width / 2, -height / 2, width, height]);

    simulation.nodes(dataNodes)


    svg
      .selectAll(".nodes")
      .data(dataNodes)
      .join(
        (enter) => {
          enter
            .append("circle")
            .classed("nodes", true)
            .attr("id", (d) => `position-${d.id}`)
            .attr("r", 20)
            .style("fill", (d, i) => color(i))
            .style("stroke", (d, i) => color(i))
            .attr("cx", function (d) {
              return d.x;
            })
            .attr("cy", function (d) {
              return d.y;
            })
        }
      )

    svg
      .selectAll("text")
      .data(dataNodes)
      .join(
        (enter) => {
          enter
            .append("text")
            .classed("text", true)
            .attr("id", (d) => `text${d.id}`)
            .text((d) => {
              return d.id;
            })
            .attr("x", (d) => {
              d.x + 10
            })
            .attr("y", (d) => {
              return d.y + 5;
            });
        }
      )
    svg
      .selectAll(".nodes")
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );
    // Set the position attributes of links and nodes each time the simulation ticks.
    simulation
      .on("tick", () => {
        svg
          .selectAll(".links")
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);

        svg
          .selectAll(".nodes")
          .attr("cx", (d) => d.x)
          .attr("cy", (d) => d.y);

        svg
          .selectAll(".text")
          .attr("x", (d) => {
            d.x + 10;
          })
          .attr("y", (d) => d.y + 5);
      })

      .alphaTarget(-0.1);

    simulation.nodes().forEach(function (d) {
      d.fx = d.x;
      d.fy = d.y;
      d.fixed = true;
    });

    // Reheat the simulation when drag starts, and fix the subject position.
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.1).restart();
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    // Update the subject (dragged node) position during drag.
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    // Restore the target alpha so the simulation cools after dragging ends.
    // Unfix the subject position now that it’s no longer being dragged.
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(-0.1);
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

  }, [])

  return <StyledSVG ref={visualPositions}></StyledSVG>;
};

export default PositionsGraphD3;
