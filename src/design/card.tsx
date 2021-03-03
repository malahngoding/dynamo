import { styled } from "stitches.config";

export const RadicalCard = styled("div", {
  borderRadius: "0.375rem",
  border: `2px solid $dark`,
  boxShadow: `0 4px 0 $dark`,
  color: "$dark",
  backgroundColor: "$light",
  margin: "$1",
  maxWidth: "320px",
  variants: {
    color: {
      blue: {
        color: "$dark",
        backgroundColor: "$blue800",
      },
      pink: {
        color: "$dark",
        backgroundColor: "$pink800",
      },
      yellow: {
        color: "$dark",
        backgroundColor: "$yellow800",
      },
      green: {
        color: "$dark",
        backgroundColor: "$green800",
      },
      red: {
        color: "$dark",
        backgroundColor: "$red800",
      },
    },
  },
});
