import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { SimulationNodeDatum } from "d3";

const StyledSVG = styled.svg`
  /* font-family: "Inter"; */
  font-size: 0.5rem;

  > g,
  .nodes:hover {
    cursor: pointer;
    stroke-width: 5px !important;
    transition-duration: 0.1s;
    transition-timing-function: ease-in ease-out;
  }

  .nodes {
    /* mix-blend-mode: multiply; */
    stroke-width: 0px;
    stroke: rgba(0, 0, 0, 0);
  }
  .nodes.clicked {
    stroke: #eeff00 !important;
    stroke-width: 10px;
  }

  text {
    font-family: arial;
    font-size: 0.5rem;
    paint-order: stroke;
    stroke: #fff;
    stroke-width: 1px;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    font-weight: 800;
  }
`;

const GraphD3 = ({ graphData, setInfo, activeStory }) => {
  const [selectedNode, setSelectedNode] = useState("1");

  // Draw graph
  const visual = useRef();
  const width = 1000;
  const height = 750;
  const iconSize = 30;

  function cleanSelection() {
    setInfo("");
    setSelectedNode("");
    d3.select(visual.current).selectAll(`.nodes`).classed("clicked", false);
  }

  function setSelected(e, d) {
    setInfo(d);
    d3.select(visual.current)
      .selectAll(`.nodes`)
      .classed("clicked", false)
      .transition();

    d3.select(visual.current)
      .selectAll(`#${e.target.id}`)
      .classed("clicked", true)
      .transition();
  }
  useEffect(() => {
    d3.select("body").on("click", function (e) {
      if (e.target.nodeName == "svg") {
        cleanSelection();
      }
    });
  });

  // DRAW graph nodes and link here
  useEffect(() => {
    if (graphData.nodes && visual.current) {
      const simulation = d3
        .forceSimulation(graphData.nodes)
        .force(
          "link",
          d3
            .forceLink(graphData.links)
            .id((d) => d.id)
            .distance(function (link) {
              let m =
                link.source.properties.position ===
                link.target.properties.position
                  ? 10
                  : 0;
              m =
                link.source.properties.size === link.target.properties.size
                  ? m * 1.1
                  : m * 1;
              return m;
            })
            .strength(function (link) {
              // Multiplier depending on position and size of the nodes
              let m =
                link.source.properties.position ===
                link.target.properties.position
                  ? 0.01
                  : 0;
              m =
                link.source.properties.size === link.target.properties.size
                  ? m * 10
                  : m * 1;
              return m;
            })
        )
        .force("collide", d3.forceCollide(iconSize * 1.5))
        .force("charge", d3.forceManyBody().strength(-250))
        .force("x", d3.forceX())
        .force("y", d3.forceY())
        .stop();

      simulation.tick(300);

      const positions = d3.group(graphData.nodes, (d) => d.properties.position);
      const colorPositions = d3.scaleOrdinal(positions.values(), [
        "#ca619d",
        "#5a70c0",
        "#f1ae23",
      ]);

      const svg = d3.select(visual.current);
      svg
        .selectAll(".links")
        .data(graphData.links)
        .join(
          (enter) => {
            enter
              .append("line")
              .classed("links", true)
              .attr("stroke", "#484444")
              .attr("stroke-opacity", 0.5)
              .attr("fill", "transparent")
              .attr("stroke-width", 1.2)
              .attr("x1", (d) => d.source.x)
              .attr("y1", (d) => d.source.y)
              .attr("x2", (d) => d.target.x)
              .attr("y2", (d) => d.target.y);
          },
          (update) => {
            update.attr("stroke-width", (d) => Math.sqrt(d.value));
          },
          (exit) => exit.call((exit) => exit.transition().remove())
        );
      svg
        .selectAll(".nodes")
        .data(graphData.nodes)
        .join(
          (enter) => {
            enter
              .append("circle")
              .classed("nodes", true)
              .attr("id", (d) => `position-${d.identity}`)
              .attr("r", iconSize)
              .attr("cx", function (d) {
                return d.x;
              })
              .attr("cy", function (d) {
                return d.y;
              })
              .style("fill", (d) => {
                let color = d3.color(colorPositions(d.properties.position));
                color.opacity = 1;
                // return d.properties.position ? color : "none";
                return "#000fff";
              })
              .style("stroke", (d) => {
                return d3
                  .color(colorPositions(d.properties.position))
                  ?.darker(0.8);
              })
              .on("click", (e, d) => setSelected(e, d));
          },
          (update) =>
            update
              .attr("id", (d) => `position-${d.id}`)
              .style("fill", (d) => {
                let color = d3.color(colorPositions(d.properties.position));
                color.opacity = 0.4;
                // return d.properties.position ? color : "none";
                return "#000fff";
              })
              .style("stroke", (d) => {
                return d3
                  .color(colorPositions(d.properties.position))
                  ?.darker(0.8);
              }),
          (exit) =>
            exit.call((exit) =>
              exit.transition().style("fill", "transparant").remove()
            )
        );

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
        })
        .alphaTarget(-0.1);
      simulation.nodes().forEach(function (d) {
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

      // var zoom_handler = d3.zoom().on("zoom", zoom_actions);
      // function zoom_actions() {
      //   svg.attr("transform", d3.event.transform);
      // }
      // zoom_handler(svg);
    }
  }, [graphData]);

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
      viewBox={[-width / 2, -height / 2, width, height]}
      style={{ maxWidth: "100%", height: "auto" }}
    >
      <defs>
        <filter id="blur">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <pattern
          id="star"
          width="70"
          height="8"
          patternTransform="scale(2)"
          patternUnits="userSpaceOnUse"
        >
          <rect width="100%" height="100%" fill="#2b2b31" />
          <path
            fill="none"
            stroke="#ecc94b"
            d="M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2s14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6S49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14S20.785-8.742 16.3-3.661C11.918 1.306 8.353 6-.02 6.002"
          />
        </pattern>

        <marker
          id="marker-start"
          viewBox="0 0 5 5"
          refX="2.5"
          refY="2.5"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <polygon points="0,5 1.67,2.5 0,0 5,2.5" fill="#000"></polygon>
        </marker>

        <pattern
          id="rrreplicate-pattern1"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(30)"
          strokeWidth="4"
          stroke="#fff"
          fill="none"
          strokeOpacity="0.48"
        >
          <line x1="10" y1="0" x2="10" y2="80"></line>
          <line x1="30" y1="0" x2="30" y2="80"></line>
          <line x1="50" y1="0" x2="50" y2="80"></line>
          <line x1="70" y1="0" x2="70" y2="80"></line>
        </pattern>
      </defs>
    </StyledSVG>
  );
};

export default GraphD3;
