import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { SimulationNodeDatum } from "d3";

const StyledSVG = styled.svg`
  /* font-family: "Inter"; */
  font-size: 0.5rem;

  > g,
  .nodes:hover {
    stroke-width: 18px !important;
    transition-duration: 0.1s;
    transition-timing-function: ease-in ease-out;
  }
`;

const GraphD3 = ({ inputDataSet, setInfo }) => {
  const visual = useRef();
  const width = 750;
  const height = 750;
  const [selectedNode, setSelectedNode] = useState("");
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    // inital setting up graph
    d3.select(visual.current)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", [0, 0, width, height]);

    // close all on click
    d3.select("body").on("click", function (e) {
      if (e.target.nodeName == "svg") {
        setInfo("");
        setSelectedNode("");
      }
    });
  }, []);

  useEffect(() => {
    if (inputDataSet) {
      console.log("change dataset in Graph");

      interface CustomNode extends SimulationNodeDatum {
        id: string;
        name: string;
      }

      let newData = {
        links: [],
        nodes: [],
      };
      console.log(inputDataSet)
      if (inputDataSet.nodes.length && inputDataSet.nodes[0].n) {
        inputDataSet.links.map((element) => {
          element.source = element.p.start.elementId;
          element.target = element.p.end.elementId;
          element.value = 1;
          element.strength = 2;
        });
        newData.links = inputDataSet.links;
        const initNodes: CustomNode[] = [
          inputDataSet.nodes.map((d) => {
            d.n.id = d.n.elementId;
            d.n.label = d.n.labels[0];
            return newData.nodes.push(d.n);
          }),
        ];
      } else if( inputDataSet.nodes.length) {
        inputDataSet.nodes.map((element) => {
          element.label = element.labels[0];
        });

        newData.nodes = inputDataSet.nodes;

        inputDataSet.relationships.map((element) => {
          element.source = element.fromId;
          element.target = element.toId;
          element.value = 1;
          element.strength = 2;
        });
        newData.links = inputDataSet.relationships;
      } else {
        return
      }
      console.log("new data" , newData)
      setGraphData(newData);
    }
  }, [inputDataSet]);

  useEffect(() => {
    if (graphData.nodes && visual.current) {
      console.log("update Graph");
      const svg = d3.select(visual.current);
      console.log(graphData.nodes);

      const labels = d3.group(graphData.nodes, (d) => d.label);
      const colorLabels = d3.scaleOrdinal(
        labels.values(),
        d3.schemeGreys[labels.size]
      );
      const positions = d3.group(graphData.nodes, (d) => d.properties.position);

      const sizeLabels = d3
        .scaleOrdinal()
        .domain(labels.values())
        .range([2, 8]);

      const colorPositions = d3.scaleOrdinal(positions.values(), [
        "#ca619d",
        "#5a70c0",
        "#f1ae23",
      ]);

      // Force Simulation
      const simulation = d3
        .forceSimulation(graphData.nodes)
        .force(
          "link",
          d3
            .forceLink(graphData.links)
            .id((d) => d.id)
            .distance(50)
            .strength(1)
        )
        .force("center", d3.forceCenter(width, height / 2).strength(1))
        .force("charge", d3.forceManyBody().strength(15))
        .force("collision", d3.forceCollide().radius(40))
        .on("tick", ticked);

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
              .attr("stroke-width", (d) => Math.sqrt(d.value));
          },
          (update) => {
            update.attr("stroke-width", (d) => Math.sqrt(d.value));
          },
          (exit) => exit.call((exit) => exit.transition().remove())
        );

      // Positions background on all nodes
      svg
        .selectAll(".nodes-background")
        .data(graphData.nodes)
        .join(
          (enter) => {
            enter
              .append("circle")
              .classed("nodes-background", true)
              .style(" mix-blend-mode", "screen")
              .attr("filter", "url(#blur)")
              .attr("id", (d) => `position-${d.id}`)
              .attr("r", (d) => {
                return 60;
              })
              .style("fill", (d) => {
                let color = d3.color(colorPositions(d.properties.position));
                color.opacity = 0.6;
                return d.properties.position ? color : "none";
              })
              .style("stroke", "none")
              .style("stroke-width", 0);
          },
          (update) =>
            update
              .attr("id", (d) => `position-${d.id}`)
              .attr("r", (d) => {
                return 40;
              })
              .style("fill", (d) => {
                let color = d3.color(colorPositions(d.properties.position));
                color.opacity = 0.4;
                return d.properties.position ? color : "none";
              }),
          (exit) => exit.call((exit) => exit.remove())
        );

      // Nodes
      svg
        .selectAll(".nodes")
        .data(graphData.nodes)
        .join(
          (enter) => {
            enter
              .append("circle")
              .classed("nodes", true)
              .style("cursor", "pointer")
              .style(" mix-blend-mode", "multiply")
              .attr("id", (d) => d.id)
              .attr("r", (d, i) => {
                return d.label === "Place" ? 20 : 30;
              })
              .attr("fill", (d) => colorLabels(d.label))
              .on("click", (e, d) => {
                setSelectedNode(d.id);
                setInfo(d);
              })
              .style("stroke", (d) => {
                return d.id === selectedNode ? "black" : "rgba(0, 0, 0, 0.15)";
              })
              .style("stroke-width", (d) => {
                return `${sizeLabels(d.label)}px`;
              });
          },
          (update) =>
            update
              .attr("id", (d) => d.id)
              .attr("r", (d, i) => {
                return d.label === "Place" ? 20 : 30;
              })
              .attr("fill", (d) => colorLabels(d.label))
              .on("click", (e, d) => {
                setSelectedNode(d.id);
                setInfo(d);
              })
              .style("stroke", (d) => {
                return d.id === selectedNode ? "black" : "rgba(0, 0, 0, 0.15)";
              })
              .style("stroke-width", (d) => {
                return `${sizeLabels(d.label)}px`;
              }),
          (exit) => exit.call((exit) => exit.remove())
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

      svg
        .selectAll("text")
        .data(graphData.nodes)
        .join(
          (enter) => {
            enter
              .append("text")
              .text((d) => {
                return d.properties.Name;
              })
              .style("font-size", (d, i) => {
                return d.label === "Place" ? "1rem" : "1.2rem";
              })
              .style("fill", (d, i) => {
                return d.label === "Place" ? "blue" : "black";
              });
          },
          (update) =>
            update
              .text((d) => {
                return d.properties.Name;
              })
              .style("font-size", (d, i) => {
                return d.label === "Place" ? "1rem" : "1.2rem";
              })
              .style("fill", (d, i) => {
                return d.label === "Place" ? "blue" : "black";
              }),
          (exit) => exit.call((exit) => exit.transition().remove())
        );

      function ticked() {
        svg
          .selectAll("circle")
          .attr("cx", (d) => d.x)
          .attr("cy", (d) => d.y);
        svg
          .selectAll("text")
          .attr("x", (d) => d.x + 30)
          .attr("y", (d) => d.y + 5);
        svg
          .selectAll(".links")
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);
      }

      // Reheat the simulation when drag starts, and fix the subject position.
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      // Update the subject (dragged node) position during drag.
      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      // Restore the target alpha so the simulation cools after dragging ends.
      // Unfix the subject position now that it’s no longer being dragged.
      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }
      return () => {
        simulation.stop();
      };
    }
  }, [graphData]);

  // Set stroke on selected node
  useEffect(() => {
    if (selectedNode && visual.current) {
      d3.select(visual.current)
        .selectAll(".nodes")
        .transition()
        .style("stroke", (d) => {
          if (d.id === selectedNode) {
            return "rgba(0, 0, 0, 0.65)";
          } else {
            return "rgba(0, 0, 0, 0.15)";
          }
        })
        .style("stroke-width", (d) => {
          if (d.id === selectedNode) {
            return "15px";
          } else {
            return "2px";
          }
        });
    }
  }, [selectedNode]);

  return (
    <StyledSVG ref={(el) => (visual.current = el)}>
      {" "}
      <defs>
        <filter id="blur">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
    </StyledSVG>
  );
};

export default GraphD3;
