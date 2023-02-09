import React from "react";

import { ReactDOM } from "react";

const render = (reactElement, containerDOMElement) => {
  // create link element
  const element = document.createElement(reactElement.type);

  // Add text to the elemennt
  element.innerText = reactElement.children;

  // set attributes
  element.setAttribute("href", reactElement.props.href);

  // append the element to the DOM
  containerDOMElement.appendChild(element);
};

const reactElement = {
  type: "a",
  props: {
    href: "https://wikipedia.org/",
  },
  children: "Read more on Wikipedia",
};

const containerDOMElement = document.querySelector("#root");

render(reactElement, containerDOMElement);
