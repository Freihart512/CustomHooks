import { useState } from "react";
import Products from "./views/Products";
import "./styles.css";
import Product from "./views/Product";

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState();

  const onclick = (product) => {
    console.log("que es esto", product);
    setSelectedProductId(product._id);
  };

  console.log("selectedProductId", selectedProductId);

  return (
    <div className="App">
      <div style={{ width: "800px", height: "600px" }}>
        {!selectedProductId && <Products onSelectProduct={onclick} />}
        {selectedProductId && (
          <>
            <button onClick={() => onclick({})}> back to products</button>
            <Product productId={selectedProductId} />
          </>
        )}
      </div>
    </div>
  );
}
