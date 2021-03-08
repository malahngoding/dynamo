import { styled } from "stitches.config";

export const Editor = (): JSX.Element => {
  const EditorComponent = styled("div", {
    backgroundColor: "$light",
    height: "100%",
    flexGrow: 1,
    padding: "$0",
  });
  return <EditorComponent>Editor</EditorComponent>;
};
