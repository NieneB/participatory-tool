import GraphD3 from "./ActorMappingD3Graph_v2";
import nodeData from "../data/nodes.json";
import relationData from "../data/relations.json";
import { PanelBack } from "../pages/index.styles";
import { useEffect, useState } from "react";
import { SimulationNodeDatum } from "d3";

const MappingDataContent = ({ inputDataSet, activeStory, setExtraCollapse, setInfoContent }) => {
    const [defaultDataSet, setDefaultDataSet] = useState();
    const [graphDataSet, setGraphDataSet] = useState();


    function setInfo(element) {
        setExtraCollapse(["info", element ? true : false]);
        setInfoContent(element);
    }

    function toLowerCaseKeysAndValues(obj: any): any {
        if (typeof obj !== "object" || obj === null) {
            // If it's not an object, convert it to lowercase if it's a string.
            return typeof obj === "string" ? obj.toLowerCase() : obj;
        }

        if (Array.isArray(obj)) {
            // If it's an array, recursively process each element.
            return obj.map(toLowerCaseKeysAndValues);
        }

        // Process object keys and values >> All but Name!
        return Object.keys(obj).reduce((acc, key) => {
            if (key !== "Name") {
                const lowerCaseKey = key.toLowerCase();
                acc[lowerCaseKey] = toLowerCaseKeysAndValues(obj[key]);
                return acc;
            } else {
                const lowerCaseKey = key.toLowerCase();
                acc[lowerCaseKey] = obj[key];
                return acc;
            }
        }, {} as Record<string, any>);
    }

    useEffect(() => {
        // Initialize default dataset
        if (!inputDataSet) {
            const data = {
                nodes: nodeData,
                links: relationData,
            };
            setDefaultDataSet(data);
        } else {
            setDefaultDataSet(inputDataSet)
        }
    }, [inputDataSet]);

    useEffect(() => {
        if (defaultDataSet) {
            const newObj = toLowerCaseKeysAndValues(defaultDataSet);
            if (newObj) {

                interface CustomNode extends SimulationNodeDatum {
                    id: string;
                    name: string;
                }

                let newData = {
                    links: [],
                    nodes: [],
                };
                // Edits for Default Dataset 
                if (newObj.nodes.length && newObj.nodes[0].n) {
                    newObj.links.map((element) => {
                        element.source = element.p.start.elementid;
                        element.target = element.p.end.elementid;
                        element.value = 1;
                        element.strength = 2;
                    });
                    newData.links = newObj.links;
                    const initNodes: CustomNode[] = [
                        newObj.nodes.map((d) => {
                            d.n.id = d.n.elementid;
                            d.n.label = d.n.labels[0];
                            d.n.properties.connections = newObj.links.reduce((acc, l) => {
                                if (l.source === d.n.id || l.target === d.n.id) {
                                    acc = acc + 1;
                                }
                                return acc;
                            }, 0);
                            return newData.nodes.push(d.n);
                        }),
                    ];
                    setGraphDataSet(newData);

                } else if (newObj.nodes.length) {
                    // Edits for Input Dataset
                    newObj.nodes.map((element) => {
                        element.label = element.labels[0];
                    });

                    newData.nodes = newObj.nodes;

                    newObj.relationships.map((element) => {
                        element.source = element.fromid;
                        element.target = element.toid;
                        element.value = 1;
                        element.strength = 2;
                    });
                    newData.links = newObj.relationships;
                    newData.nodes.map((d) => {
                        d.properties.connections = newData.links.reduce((acc, l) => {
                            if (l.source === d.id || l.target === d.id) {
                                acc = acc + 1;
                            }
                            return acc;
                        }, 0);
                    }
                    )
                    setGraphDataSet(newData);

                } else {
                    setGraphDataSet({})
                }
            }
        }
    }, [defaultDataSet]);


    useEffect(() => {
        if (activeStory && graphDataSet) {
            // Filter data on story 
            if (activeStory !== "Possibilities") {
                
                // const removedNodes = []
                // graphDataSet.nodes = graphDataSet.nodes.filter((node) => {
                //     if (node.label === "possibilities") {
                //         removedNodes.push(node.id)
                //     }
                //     return node.label !== "possibilities"
                // })
                // console.log(graphDataSet.nodes)
                // console.log(removedNodes)
                // graphDataSet.links = graphDataSet.links.filter((link) => {
                //     console.log(link.target, removedNodes.includes(link.target))
                //     return link.target.label !== "possibilities" || !removedNodes.includes(link.target)
                // })
                // setGraphDataSet(
                // )
            } else {
                setGraphDataSet(graphDataSet)
            }
        }
    }, [activeStory, graphDataSet])


    return (
        <>
            <PanelBack key="graph">
                {graphDataSet && (
                    <GraphD3
                        graphData={graphDataSet}
                        setInfo={setInfo}
                        activeStory={activeStory}
                    ></GraphD3>
                )}
            </PanelBack>
        </>
    );
};

export default MappingDataContent;
