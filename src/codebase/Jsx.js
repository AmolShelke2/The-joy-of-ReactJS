import React from "react";
import { createRoot } from "react-dom/client";

// old way
// const element = React.createElement(
//   "p",
//   {
//     id: "hello",
//   },
//   "Hello World!"
// );

// New way
const element = <p id="hello">Hello world</p>;

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(element);
