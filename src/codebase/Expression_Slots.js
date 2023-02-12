import { render } from "react-dom";

const shoppingList = ["apple", "banana", "carrot"];

const Expression = () => (
  <div className="item-text">Items Left to purchase: {shoppingList.length}</div>
);

export default Expression;
