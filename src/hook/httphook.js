import { useState, useCallback } from "react";
const HttpHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async (requestConfig, applyFunc) => {
    try {
      setLoading(true);
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      applyFunc(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, []);
  return {
    sendRequest,
    loading,
    error,
  };
};

export default HttpHook;
