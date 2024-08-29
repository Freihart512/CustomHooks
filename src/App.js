import { useState } from "react";
import Products from "./views/Products";
import "./styles.css";
import Product from "./views/Product";

export default function App() {
  const { view, setView } = useState("products");
  return (
    <div className="App">
      <div style={{ width: "800px", height: "600px" }}>
        <Product />
      </div>
    </div>
  );
}
