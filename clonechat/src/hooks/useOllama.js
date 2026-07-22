import { useState } from "react";
import { fetchApi } from "../api/ollama";

export const useOllama = () => {
  const [responses, setResponses] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendPrompt = async (msg) => {
    setError(null);
    try {

      setLoading(true);
      const result = await fetchApi(msg);
      setResponses(result);
    
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return { sendPrompt, responses, loading, error };
};
