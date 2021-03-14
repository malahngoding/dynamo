import { styled } from "stitches.config";

export const Preview = (): JSX.Element => {
  const PreviewComponent = styled("div", {
    backgroundColor: "$dark800",
    color: "$light",
    height: "100%",
    width: "344px",
    padding: "$0",
  });
  return (
    <PreviewComponent>
      <img
        src="/assets/img/Spaceman.png"
        alt=""
        className="pixel"
        style={{ height: "72px" }}
      />
    </PreviewComponent>
  );
};
