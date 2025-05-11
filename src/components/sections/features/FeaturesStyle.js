import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const STypography = styled(Typography)(({ theme }) => ({
  fontWeight: "800",
  border: "2px solid white",
  padding: "1rem",
  marginRight: "-11rem",
  transform: "translateX(-40%) rotate(-90deg)",
  whiteSpace: "nowrap",
  [theme.breakpoints.down("md")]: {
    marginRight: "0",
    transform: "translateX(0%) rotate(0deg)",
    padding: "0",
    border: "none",
  },
}));

export { STypography };
