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

const GraphD3 = ({ data, toggleInfo }) => {
  const visual = useRef();
  const dataNodes = data.nodes;

  const dataLinks = data.links;
  const color = d3.scaleOrdinal(["#ca619d", "#5a70c0", "#f1ae23"]);

  const width = 100;
  const height = 100;

  // https://observablehq.com/@d3/disjoint-force-directed-graph/2
  //   const links = data.links.map(d => ({...d}));
  //   const nodes = data.nodes.map(d => ({...d}));

  const simulation = d3
    .forceSimulation()
    // .force("charge", d3.forceManyBody().strength(10))
    .force("collision", d3.forceCollide().radius(17))
    .force("center", d3.forceCenter(width / 3 + width / 3, height / 2));

  useEffect(() => {
    d3.select("body").on("click", function (e) {
      if (e.target.nodeName == "svg") {
        toggleInfo(e, "");
      }
    });

    const svg = d3
      .select(visual.current)
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", [0, 0, width, height]);

    simulation.nodes(dataNodes);
    simulation.force(
      "link",
      d3.forceLink(dataLinks).id((d) => d.id)
    );
    simulation.on("tick", ticked);
    const groups = svg
      .append("g")
      .attr("class", "groups")
      .selectAll("g")
      .data(dataNodes)
      .enter();

    const link = groups
      .append("g")
      .attr("stroke", "#484444")
      .attr("stroke-opacity", 0)
      .selectAll()
      .data(dataLinks)
      .join("line")
      .attr("stroke-width", (d) => Math.sqrt(d.value));

    const node = groups
      .append("g")
      .attr("class", "node")
      .attr("id", (d) => d.id)
      .on("click", (d, i) => {
        toggleInfo(d, i);

        // Add 10 new nodes
        const newNodes = Array.from({ length: 10 }, (_, i) => ({
          id: `new-node-${Date.now()}-${i}`, // Ensure unique ID
          x: d.x + Math.random() * 20 - 10, // Random nearby position
          y: d.y + Math.random() * 20 - 10,
        }));
        data.nodes.push(...newNodes);

        // Rebind data and restart simulation
        const updatedNodes = svg.selectAll("g.node").data(data.nodes);
        const updatedNodeEnter = updatedNodes
          .enter()
          .append("g")
          .attr("class", "node");

        updatedNodeEnter
          .append("circle")
          .classed("node-circle", true)
          .attr("r", 20)
          .attr("fill", (d, i) => color(i))
          .style("mix-blend-mode", "multiply")
          .style("stroke", "rgba(0, 0, 0, 0.15)")
          .style("stroke-width", "3.95px");

        updatedNodeEnter
          .append("text")
          .text((d) => d.id)
          .style("font-size", "0.5em");

        updatedNodes.exit().remove();

        simulation.nodes(data.nodes);
        simulation.alpha(1).restart();
      })
      .style("cursor", "pointer");

    node
      .append("circle")
      .classed("node-circle", true)
      .attr("r", 20)
      .attr("fill", (d, i) => color(i))
      .style("stroke", "rgba(0, 0, 0, 0.15)")
      .style("stroke-width", "3.95px");

    node
      .append("text")
      .text((d, i) => {
        return d.id;
      })
      .style("font-size", "0.5em");

    node.call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );
    function ticked() {
      node
        .selectAll("circle")
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y);
      node
        .selectAll("text")
        .attr("x", (d) => d.x)
        .attr("y", (d) => d.y);
      link
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
  }, []);

  useEffect(() => {
    const svg = d3.select(visual.current);

    simulation.stop();

    simulation.restart();

    // invalidation.then(() => simulation.stop());
  }, [data]);

  return <StyledSVG ref={visual}></StyledSVG>;
};

export default GraphD3;
