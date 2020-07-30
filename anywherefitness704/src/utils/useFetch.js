import { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";

export default function useFetch(url, options) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosWithAuth()
      .get(url, options)
      .then((res) => {
        setResponse(res);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, []);

  return { response, error, isLoading };
}
