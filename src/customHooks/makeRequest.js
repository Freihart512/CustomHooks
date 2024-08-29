import { useState } from "react";

export default function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const makeRequest = async (url, config) => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(url, config);
      const { data } = await response.json();
      setData(data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return [makeRequest, data, error, isLoading];
}
