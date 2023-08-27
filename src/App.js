import * as React from "react";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import NavbarMain from "./pages/navbar";
import HomePage from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./index.css";

//import background from "./assests/background.svg";

const darkTheme = createTheme({ type: "dark" });

const App = () => {
  return (
    <NextUIProvider theme={darkTheme} style={backgroundImage}>
      <NavbarMain />
      <HomePage />

      <About />

      <Contact />
      <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
        <a className="text-indigo-500">mahados298@gmail.com</a>
        <p className="leading-normal my-5">
          UMBC Student &
          <br />
          Programmer
        </p>
      </div>
    </NextUIProvider>
  );
};
const backgroundImage = {
  backgroundImage: `url("./assests/background.svg")`,
};
export default App;
