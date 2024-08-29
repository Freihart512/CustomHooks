import { useEffect, useState } from "react";
import useFetch from "./makeRequest";
import { formatProduct } from "./utils/formatters";
import { isNumber } from "./utils/validations";

export default function useGetProducts(id) {
  const { productId, setPoductId } = useState(id);
  const { product, setPoduct } = useState(null);
  const { error, setError } = useState(null);
  const { makeRequest, data, isLoading, error: apiError } = useFetch();

  useEffect(() => {
    if (!data) {
      setProduct(null);
    }
    const formattedProduct = formatProduct(data);
    setProduct(formattedProduct);
  }, [data]);

  useEffect(() => {
    if (!productId) {
      setProduct(null);
    }

    if (!isNumber(productId)) {
      setError(new Error("Invalid Product id: it must be a number"));
    }
    makeRequest(`https://api.restful-api.dev/objects/${productId}`);
  }, [productId]);

  return { setPoductId, product, isLoading, error: error || apiError };
}
