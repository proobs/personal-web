import * as React from "react";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import NavbarMain from "./pages/navbar";
import HomePage from "./pages/home";
import About from "./pages/about";
import "./index.css";

//import background from "./assests/background.svg";

const darkTheme = createTheme({ type: "dark" });

const App = () => {
  return (
    <NextUIProvider theme={darkTheme} style={backgroundImage}>
      <NavbarMain />
      <HomePage />

      <About />
      {/*\
    <Projects />
    <Contact />*/}
    </NextUIProvider>
  );
};
const backgroundImage = {
  backgroundImage: `url("./assests/background.svg")`,
};
export default App;
