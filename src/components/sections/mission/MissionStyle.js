import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { appColors } from "./../../../theme.js";

const STypography = styled(Typography)(() => ({
  color: appColors.text2,
  "&.MuiTypography-h3": {
    fontWeight: "800",
  },
  "&.MuiTypography-body1": {
    margin: "3rem 0",
  },
  "@media (max-width:1400px)": {
    "&.MuiTypography-h3": {
      fontSize: "3rem",
    },
  },
  "@media (max-width:720px)": {
    "&.MuiTypography-h3": {
      fontSize: "2.5rem",
    },
    "&.MuiTypography-body1": {
      margin: "2rem 0",
    },
  },
}));

export { STypography };
