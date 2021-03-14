import { styled } from "stitches.config";
import { Logo } from "src/design/branding";
import { Box, Div } from "src/design/block";
import { Paragraph, TitlePrimary } from "src/design/typography";
import { Button } from "src/design/button";

interface ProjectBrowserProps {
  splinter: string;
  title: string;
  story: string;
  instructions: string[];
}

export const ProjectBrowser = (props: ProjectBrowserProps): JSX.Element => {
  const ProjectBrowserComponent = styled("div", {
    backgroundColor: "$dark300",
    width: "344px",
    height: "100%",
    padding: "$0",
    display: "flex",
    flexDirection: "column",
  });
  return (
    <ProjectBrowserComponent>
      <Box css={{ justifyContent: "flex-start", alignItems: "flex-end" }}>
        <Logo />
        <Div
          css={{
            fontWeight: 1000,
            marginLeft: "$0",
            userSelect: "none",
            ":hover": { cursor: "pointer" },
          }}
        >
          Malah Ngoding
        </Div>
      </Box>
      <Box
        css={{
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          marginTop: "$2",
          padding: "$1",
        }}
      >
        <Div
          css={{ fontFamily: "monospace", fontWeight: 700, fontSize: "16px" }}
        >
          {props.splinter}
        </Div>
        <TitlePrimary>{props.title}</TitlePrimary>
        <Div css={{ margin: "$1 0" }}>
          <Paragraph>{props.story}</Paragraph>
        </Div>
        <ListItem>
          {props.instructions.map((instructtion) => (
            <li key={instructtion}>{instructtion}</li>
          ))}
        </ListItem>
      </Box>
      <Box css={{ margin: "$1" }}>
        <Button color="white" css={{ width: "100%" }}>
          Petunjuk
        </Button>
      </Box>
    </ProjectBrowserComponent>
  );
};

const ListItem = styled("ol", {
  listStyleType: "decimal",
  fontSize: "14px",
  marginLeft: "$1",
  textAlign: "left",
  li: {
    paddingLeft: "$0",
    margin: "$0 0",
  },
});
