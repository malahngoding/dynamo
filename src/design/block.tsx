import { styled } from "stitches.config";

export const Block = styled("div", {
  padding: "$1",
  sm: {
    padding: "$1",
  },
  md: {
    padding: "$2",
  },
});

export const Box = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
  },
});

export const InnerDomain = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  maxWidth: "48rem",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "$5",
});

export const WallOfTextBlock = styled(InnerDomain, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "0 $1",
});

export const SplinterBox = styled(Box, {
  flexDirection: "column",
  margin: "$3 0 -$0 0",
  alignSelf: "flex-start",
  md: { alignSelf: "center" },
});

export const HeadingBox = styled(Box, {
  flexDirection: "column",
  margin: "0 0 $2 0",
  alignSelf: "flex-start",
  md: { alignSelf: "center" },
});

export const BackgroundColorSetter = styled("div", {
  backgroundColor: "$light",
  variants: {
    color: {
      blue: {
        backgroundColor: "$blue100",
      },
      red: {
        backgroundColor: "$red100",
      },
      green: {
        backgroundColor: "$green100",
      },
      yellow: {
        backgroundColor: "$yellow100",
      },
      pink: {
        backgroundColor: "$pink100",
      },
    },
  },
});
