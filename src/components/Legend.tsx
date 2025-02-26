const Legend = ({ activeStory }) => {

  return (
    <>
      {activeStory.length > 0 && <img style={{ width: "auto" , margin: "0"}} src={`./img/legend_${activeStory.toLowerCase()}.png`} />}
    </>
  );
};

export default Legend;
