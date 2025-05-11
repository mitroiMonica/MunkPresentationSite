import { ThemeProvider } from "@mui/material";
import "./App.css";
import MainPage from "./pages/MainPage.js";
import appTheme from "./theme.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/app",
    element: <h1>Web application</h1>,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
};

export default App;
