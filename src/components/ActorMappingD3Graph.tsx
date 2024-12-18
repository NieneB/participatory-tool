import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { SimulationNodeDatum } from "d3";
import { graph } from "neo4j-driver";

const StyledSVG = styled.svg`
  /* font-family: "Inter"; */
  font-size: 0.5rem;

  > g,
  .nodes:hover {
    stroke-width: 18px !important;
    transition-duration: 0.1s;
    transition-timing-function: ease-in ease-out;
  }

  .nodes {
    /* mix-blend-mode: multiply; */
    stroke: #292929;
    stroke-width: 1px;
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

const GraphD3 = ({ inputDataSet, setInfo, positionsOn }) => {
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
      if (e.target.nodename == "svg") {
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
      console.log("input", inputDataSet);
      if (inputDataSet.nodes.length && inputDataSet.nodes[0].n) {
        inputDataSet.links.map((element) => {
          element.source = element.p.start.elementid;
          element.target = element.p.end.elementid;
          element.value = 1;
          element.strength = 2;
        });
        newData.links = inputDataSet.links;
        const initNodes: CustomNode[] = [
          inputDataSet.nodes.map((d) => {
            d.n.id = d.n.elementid;
            d.n.label = d.n.labels[0];
            return newData.nodes.push(d.n);
          }),
        ];
      } else if (inputDataSet.nodes.length) {
        inputDataSet.nodes.map((element) => {
          element.label = element.labels[0];
        });

        newData.nodes = inputDataSet.nodes;

        inputDataSet.relationships.map((element) => {
          element.source = element.fromid;
          element.target = element.toid;
          element.value = 1;
          element.strength = 2;
        });
        newData.links = inputDataSet.relationships;
      } else {
        return;
      }
      console.log("new data", newData);
      setGraphData(newData);
    }
  }, [inputDataSet]);

  useEffect(() => {
    if (graphData.nodes && visual.current) {
      console.log("update Graph");
      const svg = d3.select(visual.current);
      console.log(graphData.nodes);

      const labels = d3.group(graphData.nodes, (d) => d.label);
      // console.log("a",labels.size)
      // const colorLabels = d3.scaleOrdinal(
      //   labels.values(),
      //   d3.schemeGreys[labels.size]
      // );
      // console.log("colorLabels")

      const sizeLabels = d3
        .scaleOrdinal()
        .domain(labels.values())
        .range([2, 8]);

      // Force Simulation
      const simulation = d3
        .forceSimulation(graphData.nodes)
        // .force("center", d3.forceCenter(width, height / 2))
        .force(
          "link",
          d3
            .forceLink(graphData.links)
            .id((d) => d.id)
            .distance((d) => {
              return d.p.segments[0].relationship.type === "closeto" ? 100 : 150;
            })
        )
        .force("x", d3.forceX(width).strength(0.03))
        .force("y", d3.forceY(height / 2).strength(0.03))
        .force("charge", d3.forceManyBody().strength(-150))
        .force(
          "collision",
          d3
            .forceCollide()
            .radius((d) => {
              return d.label === "place" ? 40 : 10;
            })
            .strength(1)
        )

        .on("tick", ticked);

      const positions = d3.group(graphData.nodes, (d) => d.properties.position);
      const colorPositions = d3.scaleOrdinal(positions.values(), [
        "#ca619d",
        "#5a70c0",
        "#f1ae23",
      ]);

      d3.select(visual.current)
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
                return 40;
              })
              .style("visibility", positionsOn ? "visible" : "hidden")
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
              .style("visibility", positionsOn ? "visible" : "hidden")
              .style("fill", (d) => {
                let color = d3.color(colorPositions(d.properties.position));
                color.opacity = 0.4;
                return d.properties.position ? color : "none";
              }),
          (exit) =>
            exit.call((exit) =>
              exit.transition().style("fill", "transparant").remove()
            )
        );
      svg
        .selectAll(".links")
        .data(graphData.links)
        .join(
          (enter) => {
            enter
              .append("line")
              .classed("links", true)
              .attr("marker-mid", "url(#marker-start)")
              .attr("stroke", "#484444")
              .attr("stroke-opacity", 0.5)
              .attr("fill", "transparent")
              .attr("stroke-width", (d) => Math.sqrt(d.value));
          },
          (update) => {
            update.attr("stroke-width", (d) => Math.sqrt(d.value));
          },
          (exit) => exit.call((exit) => exit.transition().remove())
        );

      // Nodes Actors
      svg
        .selectAll(".rect-nodes")
        .data(
          graphData.nodes.filter((el) => {
            return el.label === "actor";
          })
        )
        .join(
          (enter) => {
            enter
              .append("rect")
              .classed("nodes rect-nodes", true)
              .style("cursor", "pointer")
              .attr("id", (d) => d.id)
              .attr("fill", "#525252")
              .attr("width", (d) => {
                return d.properties.size === "organization"
                  ? "50"
                  : d.properties.size === "person"
                  ? "20"
                  : "40";
              })
              .attr("height", (d) => {
                return d.properties.size === "organization"
                  ? "50"
                  : d.properties.size === "person"
                  ? "20"
                  : "40";
              })
              .attr("rx", (d) => {
                return d.properties.size === "person" ? "3" : "8";
              })
              .attr("rx", (d) => {
                return d.properties.size === "person" ? "3" : "8";
              })
              .on("click", (e, d) => {
                setSelectedNode(d.id);
                setInfo(d);
              })
              .style("stroke", "transparant");
            // enter
            //   .append("rect")
            //   .classed("nodes rect-nodes", true)
            //   .style("cursor", "pointer")
            //   .attr("id", (d) => d.id)
            //   .attr("width", "40")
            //   .attr("height", "40")
            //   .attr("rx", "8")
            //   .attr("rx", "8")
            //   .attr("fill", (d) => {
            //     d.properties.interest === "politics"? "": "url(#rrreplicate-pattern1)"})
          },
          (update) =>
            update
              .attr("id", (d) => d.id)
              .on("click", (e, d) => {
                setSelectedNode(d.id);
                setInfo(d);
              })
              .attr("width", (d) => {
                return d.properties.size === "organization"
                  ? "50"
                  : d.properties.size === "person"
                  ? "20"
                  : "40";
              })
              .attr("height", (d) => {
                return d.properties.size === "organization"
                  ? "50"
                  : d.properties.size === "person"
                  ? "20"
                  : "40";
              })
              .attr("rx", (d) => {
                return d.properties.size === "person" ? "3" : "8";
              })
              .attr("rx", (d) => {
                return d.properties.size === "person" ? "3" : "8";
              }),

          (exit) => exit.call((exit) => exit.remove())
        );

      // Nodes Area
      svg
        .selectAll(".ellipse-nodes")
        .data(
          graphData.nodes.filter((el) => {
            return el.label === "area";
          })
        )
        .join(
          (enter) => {
            enter
              .append("path")
              .attr("id", (d) => d.id)
              .attr(
                "d",
                "M275.56982712625893 49.68334643530903C255.54364813049068 19.709525431077253 165.36040024637612 0.20691363501606475 130.28186325907143 6.489636108160596C95.20332627176674 12.772358581305127 84.60122462788652 56.35874112931944 65.0986052024308 87.37968127417622C45.595985776975084 118.40062141903297 -17.623908632204618 176.1231301674054 13.266146706337054 192.61527697730122C44.15620204487871 209.10742378719704 206.7216571636938 210.15455055721657 250.4389372336808 186.33256213355122C294.1562173036678 162.51057370988588 295.5960061220272 79.65716743954081 275.56982712625893 49.68334643530903C255.54364813049068 19.709525431077253 165.36040024637612 0.20691363501606475 130.28186325907143 6.489636108160596"
              )
              .classed("nodes ellipse-nodes", true)
              .style("cursor", "pointer")
              .attr("ry", "25")
              .attr("rx", "40")
              .attr("fill", "#525252")
              .on("click", (e, d) => {
                setSelectedNode(d.id);
                setInfo(d);
              })
              .style("stroke", "transprant");
          },
          (update) =>
            update
              .attr("id", (d) => d.id)
              .on("click", (e, d) => {
                setSelectedNode(d.id);
                setInfo(d);
              }),
          (exit) => exit.call((exit) => exit.remove())
        );

      // Nodes Possibility
      svg
        .selectAll(".circle-nodes")
        .data(
          graphData.nodes.filter((el) => {
            return el.label === "possibilities";
          })
        )
        .join(
          (enter) => {
            enter
              .append("circle")
              .classed("nodes circle-nodes", true)
              .style("cursor", "pointer")
              .attr("id", (d) => d.id)
              .attr("r", "20")
              .attr("fill", "#525252")
              .on("click", (e, d) => {
                setSelectedNode(d.id);
                setInfo(d);
              })
              .style("stroke", "transprant");
            // .style("stroke", (d) => {
            //   return d.id === selectedNode ? "#525252" : "rgba(0, 0, 0, 0.15)";
            // })
            // .style("stroke-width", (d) => {
            //   return `${sizeLabels(d.label)}px`;
            // });
          },
          (update) =>
            update
              .attr("id", (d) => d.id)
              .on("click", (e, d) => {
                setSelectedNode(d.id);
                setInfo(d);
              }),
          // .style("stroke", (d) => {
          //   return d.id === selectedNode ? "#525252" : "rgba(0, 0, 0, 0.15)";
          // })
          // .style("stroke-width", (d) => {
          //   return `${sizeLabels(d.label)}px`;
          // }),
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
              .attr("id", (d) => `text${d.id}`)
              .text((d) => {
                return d.properties.name;
              })
              .style("fill", (d) => {
                return d.label === "area" ? "white" : "#252525";
              })
              .style("stroke", (d) => {
                return d.label === "area" ? "#252525" : "white";
              });
          },
          (update) =>
            update
              .attr("id", (d) => `text${d.id}`)
              .text((d) => {
                return d.properties.name;
              })
              .style("fill", (d) => {
                return d.label === "area" ? "white" : "#252525";
              })
              .style("stroke", (d) => {
                return d.label === "area" ? "#252525" : "white";
              }),
          (exit) => exit.call((exit) => exit.transition().remove())
        );

      function ticked() {
        svg
          .selectAll(".nodes")
          .attr("cx", (d) => d.x)
          .attr("cy", (d) => d.y)
          .attr("x", (d) => d.x - 20)
          .attr("y", (d) => d.y - 20);
        svg
          .selectAll(".nodes-background")
          .attr("cx", (d) => d.x)
          .attr("cy", (d) => d.y)
          .attr("x", (d) => d.x - 20)
          .attr("y", (d) => d.y - 20);
        svg
          .selectAll(".rect-nodes")

          .attr("x", (d) => {
            return d.properties.size === "organization"
              ? d.x - 25
              : d.properties.size === "person"
              ? d.x - 10
              : d.x - 20;
          })
          .attr("y", (d) => {
            return d.properties.size === "organization"
              ? d.y - 25
              : d.properties.size === "person"
              ? d.y - 10
              : d.y - 20;
          });
        svg
          .selectAll(".ellipse-nodes")
          .attr("transform-origin", "150 150")
          .attr(
            "transform",
            (d) => ` translate(${d.x - 150},${d.y - 140}) scale(0.3)`
          );

        svg
          .selectAll(".links")
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y)
          .attr("points", function (d) {
            return [
              d.source.x,
              d.source.y,
              // here i calculate midpoints where markers need to appear
              d.source.x / 2 + d.target.x / 2,
              d.source.y / 2 + d.target.y / 2,
              d.target.x,
              d.target.y,
            ].join(",");
          });
        // .attr("d", function (d) {
        //   var dx = d.target.x - d.source.x,
        //     dy = d.target.y - d.source.y,
        //     dr = Math.sqrt(dx * dx + dy * dy );
        //   return (
        //     "M" +
        //     d.source.x +
        //     "," +
        //     d.source.y +
        //     "A" +
        //     dr +
        //     "," +
        //     dr +
        //     " 0 0,1 " +
        //     d.target.x +
        //     "," +
        //     d.target.y
        //   );
        // });

        svg
          .selectAll("text")
          .attr("x", (d) => {
            let l = d.properties.name ? d.properties.name.length : 0;
            console.log(d);
            return d.label === "place" ? d.x - 100 : d.x + 25;
          })
          .attr("y", (d) => {
            return d.y + 5;
          });
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
  }, [graphData, positionsOn]);

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
