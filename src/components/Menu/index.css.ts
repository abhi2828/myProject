import { style } from "@vanilla-extract/css";

export const customLinkStyle = style({
  color: "#121E31",
  fontSize: "18px",
  fontWeight: "400",
  paddingRight: "100px",
  "@media": {
    "screen and (min-width: 1536px)": {
      paddingRight: "2vw",
    },
  },
  margin: 0,
  textDecoration: "none",
});
