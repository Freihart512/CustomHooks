import { useState } from "react";
import Products from "./views/Products";
import "./styles.css";

export default function App() {
  const { view, setView } = useState("products");
  return (
    <div className="App">
      <Products />
    </div>
  );
}
