const Legend = ({ activeStory }) => {

  return (
    <>
      {activeStory.length > 0 && <img style={{ width: "auto" }} src={`./img/legend_${activeStory.toLowerCase()}.png`} />}
    </>
  );
};

export default Legend;
