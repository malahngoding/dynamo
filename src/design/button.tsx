import { styled, css } from "stitches.config";

const scaleUp = css.keyframes({
  "0%": { boxShadow: `0 4px 0 $dark` },
  "50%": { boxShadow: `0 0 0 $dark` },
  "100%": { boxShadow: `0 4px 0 $dark` },
});

export const Button = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  borderRadius: "0.375rem",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  fontWeight: 700,
  padding: "0.5rem",
  border: `2px solid $dark`,
  boxShadow: `0 4px 0 $dark`,
  color: "$dark",
  ":hover": {
    animation: `${scaleUp} 0.6s`,
  },

  variants: {
    color: {
      white: {
        backgroundColor: "$light",
      },
      blue: {
        backgroundColor: "$blue800",
        color: "$light",
      },
      pink: {
        backgroundColor: "$pink800",
        color: "$dark",
      },
    },
    rounded: {
      true: {
        borderRadius: "50%",
        width: "$3",
        height: "$3",
      },
    },
  },
});
