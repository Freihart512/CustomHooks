import { useEffect, useState } from "react";
import useFetch from "./makeRequest";
import { formatProduct } from "./utils/formatters";

export default function useGetProducts() {
  const [products, setProducts] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [makeRequest, data, isLoading, error] = useFetch();

  function setFilter(value) {
    if (typeof value !== "string") {
      console.error("new Filter value is not a string", value);
      return;
    }
    setFilterText(value);
  }

  useEffect(() => {
    if (!Array.isArray(data)) {
      setProducts(null);
      return;
    }

    const formmatedProducts = data.reduce((list, unformattedProduct) => {
      const formattedProduct = formatProduct(unformattedProduct);
      if (
        formattedProduct &&
        (!setFilterText || formattedProduct.name.trim().startsWith(filterText))
      ) {
        list.push(formattedProduct);
      }
      return list;
    }, []);

    setProducts(formmatedProducts);
  }, [data, filterText, setProducts]);

  const getProducts = async () => {
    const url = "https://api.restful-api.dev/objects";
    await makeRequest(url);
  };

  return [getProducts, products, filterText, setFilter, isLoading, error];
}
