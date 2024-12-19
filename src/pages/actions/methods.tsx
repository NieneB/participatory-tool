import DefaultPage from "src/components/DefaultPage";

const Methods = () => {
  const dataset = [
    { title: "Method 1", content: "Lorum ipsum" , info: "Lorum ipsum more 1"},
    { title: "Method 2", content: "Lorum ipsum" , info: "Lorum ipsum more 2"},
    { title: "Method 3", content: "Lorum ipsum" , info: "Lorum ipsum more 3"},
    { title: "Method 4", content: "Lorum ipsum" , info: "Lorum ipsum more 4"},
  ];
  return <DefaultPage title="Methods & Tools" dataset={dataset}></DefaultPage>;
};
export default Methods;
