import { useEffect, useState } from "react";
import useFetch from "./makeRequest";
import { formatProduct } from "./utils/formatters";
import { isNumber } from "./utils/validations";

export default function useGetProducts(id) {
  console.log("lo que  llega", id);
  const [productId, setPoductId] = useState(id);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [makeRequest, data, isLoading, apiError] = useFetch();

  useEffect(() => {
    console.log("el product", data);
    if (!data) {
      setProduct(null);
      return;
    }
    const formattedProduct = formatProduct(data);
    setProduct(formattedProduct);
  }, [data]);

  useEffect(() => {
    setError(null);
    console.log("el ID", productId);
    if (!productId) {
      console.log("estro aqui ");
      setProduct(null);
      return;
    }

    if (!isNumber(productId)) {
      setError(new Error("Invalid Product id: it must be a number"));
      return;
    }
    makeRequest(`https://api.restful-api.dev/objects/${productId}`);
    console.log("hizo el request");
  }, [productId]);

  return [setPoductId, product, isLoading, error || apiError];
}
