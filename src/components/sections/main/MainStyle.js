import { styled } from "@mui/material/styles";
import { Typography, Button } from "@mui/material";
import { appColors } from "./../../../theme.js";

const STypography = styled(Typography)(() => ({
  margin: "1.5rem 0",
  color: appColors.text1,
  "@media (max-width:1400px)": {
    "&.MuiTypography-h1": {
      fontSize: "4rem",
    },
    "&.MuiTypography-h4": {
      fontSize: "1.5rem",
    },
    "&.MuiTypography-h6": {
      fontSize: "1rem",
    },
  },
  "@media (max-width:720px)": {
    "&.MuiTypography-h1": {
      fontSize: "3rem",
    },
    "&.MuiTypography-h4": {
      fontSize: "1rem",
    },
    "&.MuiTypography-h6": {
      fontSize: "0.7rem",
    },
  },
}));

const SButton = styled(Button)(() => ({
  color: appColors.text2,
  padding: "0.7rem",
  fontSize: "1rem",
  "&:hover": {
    backgroundColor: appColors.primary,
    color: appColors.secondary,
  },
  "@media (max-width:535px)": {
    padding: "0.5rem",
    fontSize: "0.8rem",
  },
}));

export { STypography, SButton };
