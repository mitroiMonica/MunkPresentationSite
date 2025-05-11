import {
  CardActionArea,
  CardMedia,
  Box,
  Button,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const SCardActionArea = styled(CardActionArea)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "45% 50%",
  justifyItems: "center",
  justifyContent: "center",
  gap: "5%",
  padding: "3%",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "100%",
    height: "35vh",
    width: "25vw",
  },
}));

const SCardMedia = styled(CardMedia)(() => ({
  objectFit: "contain",
}));

const SCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const SBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "55%",
  left: "52%",
  transform: "translate(-52%, -55%)",
  backgroundColor: theme.palette.background.paper,
  border: "2px solid #000",
  borderRadius: "1rem",
  boxShadow: theme.shadows[24],
  padding: "2rem 3rem",
  display: "flex",
  flexDirection: "column",
  gap: "5vh",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    top: "60%",
    overflow: "auto",
    width: "60%",
    maxHeight: "60%",
  },
}));

const SButton = styled(Button)(() => ({
  marginLeft: "auto",
  marginTop: "2.5rem",
  padding: "0",
  border: "1px solid black",
}));

export { SCardActionArea, SCardMedia, SBox, SButton, SCardContent };
