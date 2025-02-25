import { useRef, useEffect, useState, act } from "react";
import * as d3 from "d3";
import styled from "styled-components";

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
    stroke: var(--color-pink-dark);
    fill: var(--color-pink-main);
  }

  .nodes.clicked {
    stroke: var(--color-pink-dark) !important;
    stroke-width: 10px;
  }

  .links {
    stroke: var(--color-pink-main);
    stroke-width: 1.2;
  }

  text {
    font-family: arial;
    font-size: 1rem;
    paint-order: stroke;
    stroke: #fff;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-opacity: 0.8;
    font-weight: 800;
  }
`;

const GraphD3 = ({ graphData, setInfo, activeStory }) => {
  const [selectedNode, setSelectedNode] = useState("1");

  // Draw graph
  const visual = useRef();
  const width = 1500;
  const height = 750;
  const iconSize = 30;

  function cleanSelection() {
    setInfo("");
    setSelectedNode("");
    d3.select(visual.current).selectAll(`.nodes`).classed("clicked", false);
  }

  function setSelected(e, d) {
    simulation.stop();
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

  // Amount of links per node is the connections. This can be used to set the size of a circle
  const relationsWeightScale = d3
    .scaleLog(
      [
        1,
        d3.max(graphData.nodes, function (d) {
          return d.properties.connections;
        }),
      ],
      [iconSize / 3, iconSize * 2]
    )
    .base(1);

  const simulation = d3
    .forceSimulation()
    // .force("collide", d3.forceCollide(iconSize * 1.5))
    .force("charge", d3.forceManyBody().strength(-150))
    .force(
      "collide",
      d3
        .forceCollide()
        .radius((d) => {
          return relationsWeightScale(d.properties.connections + 1) * 2;
        })
        .iterations(1)
        // .radius(iconSize * 1.5)
        .iterations(1)
    )
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    .stop();

  useEffect(() => {
    d3.select("body").on("click", function (e) {
      if (e.target.nodeName == "svg") {
        cleanSelection();
      }
    });
  }, []);

  // DRAW graph nodes and link here
  useEffect(() => {
    if (graphData.nodes && visual.current) {
      const positions = d3.group(graphData.nodes, (d) => d.properties.position);
      const colorPositions = d3.scaleOrdinal(positions.values(), [
        "#ca619d",
        "#5a70c0",
        "#f1ae23",
      ]);

      simulation
        .nodes(graphData.nodes)
        .force(
          "link",
          d3
            .forceLink(graphData.links)
            .id((d) => d.id)
            .strength(0.3)
        )
        // simulation.restart();

        // if (activeStory === "Connections") {
        //   console.log("R aan ");
        //   simulation.force(
        //     "collide",
        //     d3
        //       .forceCollide()
        //       .radius((d) => {
        //         return relationsWeightScale(d.properties.connections) * 1.5;
        //       })
        //       .iterations(1)
        //   );
        //   // simulation.restart();
        // }

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
            .strength(1)
          // .strength(function (link) {
          //   // Multiplier depending on position and size of the nodes
          //   let m =
          //     link.source.properties.position ===
          //     link.target.properties.position
          //       ? 0.01
          //       : 0;
          //   m =
          //     link.source.properties.size === link.target.properties.size
          //       ? m * 10
          //       : m * 1;
          //   return m;
          // })
        );
      simulation.tick(300);

      const svg = d3.select(visual.current);
      svg
        .selectAll(".links")
        .data(graphData.links)
        .join(
          (enter) => {
            enter
              .append("line")
              .classed("links", true)
              .attr("x1", (d) => d.source.x)
              .attr("y1", (d) => d.source.y)
              .attr("x2", (d) => d.target.x)
              .attr("y2", (d) => d.target.y);
          },
          (update) => {
            update;
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
              .attr("r", (d) => {
                if (activeStory === "Actors") {
                  return d.properties.size === "organization"
                    ? iconSize + 10
                    : d.properties.size === "person"
                    ? iconSize - 10
                    : iconSize;
                } else {
                  return iconSize;
                }
              })
              .style("fill", "var(--color-pink-main)")
              .style("stroke", "var(--color-pink-dark)")
              .attr("cx", function (d) {
                return d.x;
              })
              .attr("cy", function (d) {
                return d.y;
              })
              .on("click", (e, d) => setSelected(e, d));
          },
          (update) =>
            update
              .attr("id", (d) => `position-${d.identity}`)
              .attr("r", (d) => {
                if (activeStory === "Actors" || activeStory === "Positions") {
                  return d.properties.size === "organization"
                    ? iconSize + 10
                    : d.properties.size === "person"
                    ? iconSize - 10
                    : iconSize;
                } else if (activeStory === "Connections") {
                  return relationsWeightScale(d.properties.connections + 1);
                } else {
                  return iconSize;
                }
              })
              .style("fill", (d) => {
                if (activeStory === "Positions") {
                  let color = d3.color(colorPositions(d.properties.position));
                  return d.labels[0] === "area" ? "black" : d.properties.position ? color : "none";
                } else if (activeStory === "Areas" || activeStory === "Actors") {
                  return d.labels[0] === "area" ? "black" : "var(--color-pink-main)";
                }  else {
                  return "var(--color-pink-main)";
                }
              })
              .style("stroke", (d) => {
                if (activeStory === "Positions") {
                  return d3
                    .color(colorPositions(d.properties.position))
                    ?.darker(0.8);
                } else {
                  return "var(--color-pink-dark)";
                }
              })
              .on("click", (e, d) => setSelected(e, d)),
          (exit) =>
            exit.call((exit) =>
              exit.transition().style("fill", "transparant").remove()
            )
        );

      svg
        .selectAll("text")
        .data(graphData.nodes)
        .join(
          (enter) => {
            enter
              .append("text")
              .classed("text", true)
              .attr("id", (d) => `text${d.id}`)
              .text((d) => {
                return d.properties.name;
              })
              .attr("x", (d) => {
                if (activeStory === "Actors") {
                  return d.properties.size === "organization"
                    ? d.x + iconSize + 10
                    : d.properties.size === "person"
                    ? d.x + iconSize - 10
                    : d.x + iconSize;
                } else if (activeStory === "Connections") {
                  return (
                    d.x + relationsWeightScale(d.properties.connections + 1)
                  );
                } else {
                  return d.x + iconSize;
                }

                // let l = d.properties.name ? d.properties.name.length : 0;
                // return   d.x + iconSize;
              })
              .attr("y", (d) => {
                return d.y + 5;
              });
          },
          (update) =>
            update
              .attr("id", (d) => `text${d.id}`)
              .text((d) => {
                return d.properties.name;
              })
              .attr("x", (d) => {
                if (activeStory === "Actors") {
                  return d.properties.size === "organization"
                    ? d.x + iconSize + 10
                    : d.properties.size === "person"
                    ? d.x + iconSize - 10
                    : d.x + iconSize;
                } else if (activeStory === "Connections") {
                  return (
                    d.x + relationsWeightScale(d.properties.connections + 1)
                  );
                } else {
                  return d.x + iconSize;
                }

                // let l = d.properties.name ? d.properties.name.length : 0;
                // return   d.x + iconSize;
              }),
          (exit) => exit.call((exit) => exit.transition().remove())
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

          svg
            .selectAll(".text")
            .attr("x", (d) => {
              if (activeStory === "Actors") {
                return d.properties.size === "organization"
                  ? d.x + iconSize + 10
                  : d.properties.size === "person"
                  ? d.x + iconSize - 10
                  : d.x + iconSize;
              } else if (activeStory === "Connections") {
                return d.x + relationsWeightScale(d.properties.connections + 1);
              } else {
                return d.x + iconSize;
              }
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
    }
  }, [graphData, activeStory]);

  return (
    <StyledSVG
      ref={(el) => (visual.current = el)}
      width={'100vw'}
      height={'90vh'}
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
