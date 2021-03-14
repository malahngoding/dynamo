import { Div } from "src/design/block";
import { styled } from "stitches.config";

const Code = () => {
  return <Div>ok</Div>;
};

export const Editor = (): JSX.Element => {
  const EditorComponent = styled("div", {
    backgroundColor: "$light",
    height: "100%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  });
  return (
    <EditorComponent>
      <Div css={{ backgroundColor: "$light", padding: "$0", width: "100%" }}>
        <Code />
      </Div>
      <Div
        css={{
          backgroundColor: "$dark100",
          width: "100%",
          padding: "$0",
          borderTop: "$green 1px solid",
        }}
      >
        Editor Bawah
      </Div>
    </EditorComponent>
  );
};
