import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "myranda palomino",
          "a web developer",
          "software engineer",
          "a creator",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
