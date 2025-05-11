import { styled } from "@mui/material/styles";
import { Drawer, IconButton, List, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const PAGES = ["About", "Features", "Mission", "Why Now", "Pricing"];

const SList = styled(List)(() => ({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  rowGap: "2rem",
}));

const SDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    height: "100%",
  },
}));

const SIconButton = styled(IconButton)(() => ({
  marginTop: "1rem",
  marginRight: "1.2rem",
  marginLeft: "auto",
}));

const SToolbar = styled(Toolbar)(() => ({
  height: "5rem",
  display: "flex",
  justifyContent: "space-between",
}));

const SMenuIcon = styled(MenuIcon)(() => ({
  color: "#fff",
  fontSize: "2rem",
}));

export { SList, SDrawer, SIconButton, SToolbar, SMenuIcon };
