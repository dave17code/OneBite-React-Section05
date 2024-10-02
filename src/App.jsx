import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
import Register from "./components/Register";

function App() {
  // const buttonProps = {
  //   text: "메일",
  //   color: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };

  return (
    <>
      {/* <Header />
      <Main />
      <Footer /> */}
      {/* <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <Header />
      </Button> */}
      {/* <Bulb />
      <Counter /> */}
      <Register />
    </>
  );
}

export default App;
