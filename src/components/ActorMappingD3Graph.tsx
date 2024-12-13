import { useRef, useEffect } from "react";
import * as d3 from "d3";
import styled from "styled-components";

const StyledSVG = styled.svg`
  /* font-family: "Inter"; */
  font-size: 0.5rem;

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
  dataNodes.map((element) => {
    // console.log(element)
    element.id = element.n.elementId;
  });
  dataLinks.map((element) => {
    // console.log(element.p)
    element.source = element.p.start.elementId;
    element.target = element.p.end.elementId;
    element.value = 1;
  });
  // {
  //   id: "Individual",
  //   desc: "Lorem ipsum dolor sit amet. Sit excepturi nesciunt et tempora repudiandae est maxime similique et libero aperiam a consequatur modi vel consequatur ducimus. Eos quasi esse sed quos ipsum aut necessitatibus provident id doloremque adipisci qui aperiam enim. Aut dolorem voluptatem est praesentium labore sed suscipit enim.Non accusantium placeat id enim eligendi hic voluptatum veniam hic soluta minus. Eum magnam culpa qui fugiat eius et molestias aspernatur qui impedit veniam. Sit enim ducimus ad maiores nihil qui laudantium galisum. Ut galisum totam et molestiae fugit non porro fugit a labore officiis qui impedit cupiditate est quia eaque aut veniam sint. ",
  // },
  // { source: "Individual", target: "Governmental", value: 1 },

  // https://observablehq.com/@d3/disjoint-force-directed-graph/2
  //   const links = data.links.map(d => ({...d}));
  //   const nodes = data.nodes.map(d => ({...d}));

  console.log("RUNNNNNNNNNNNNNNNN");

  d3.select("body").on("click", function (e) {
    e.preventDefault();
    if (e.target.nodeName == "svg") {
      // toggleInfo(e, "");
    }
  });

  const simulation = d3
    .forceSimulation(dataNodes)
    .force(
      "link",
      d3.forceLink(dataLinks).id((d) => d.id)
    )
    // .force("charge", d3.forceManyBody().strength(5))
    // .force("collision", d3.forceCollide().radius(8))
    .force("center", d3.forceCenter(width / 3 + width / 3, height / 2))
    .on("tick", ticked);

  const svg = d3
    .select(visual.current)
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", [0, 0, width, height]);

  const groups = svg
    .append("g")
    .attr("class", "groups")
    .selectAll("g")
    .data(dataNodes)
    .enter();

  const link = groups
    .append("g")
    .attr("stroke", "#484444")
    .attr("stroke-opacity", 0.5)
    .selectAll()
    .data(dataLinks)
    .join("line")
    .attr("stroke-width", (d) => Math.sqrt(d.value));

  const node = groups
    .append("g")
    .attr("class", "node")
    .attr("id", (d) => d.id)
    .on("click", (d, i) => toggleInfo(d, i))
    .style("cursor", "pointer");

  node
    .append("circle")
    .classed("node-circle", true)
    .attr("r", 3)
    .attr("fill", (d, i) => color(i))
    .style(" mix-blend-mode", "multiply")
    .style("stroke", "rgba(0, 0, 0, 0.15)")
    .style("stroke-width", "2px");

  node
    .append("text")
    .text((d, i) => {
      return d.n.properties.Name;
    })
    .style("font-size", "0.5em");

  node.call(
    d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended)
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
  // invalidation.then(() => simulation.stop());

  return <StyledSVG ref={visual}></StyledSVG>;
};

export default GraphD3;
