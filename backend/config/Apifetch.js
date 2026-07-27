export const apiFetch = async (message) => {
  try {
    const requestBody = {
      model: process.env.OLLAMA_MODEL,
      prompt: message,
      stream: false,
    };

    const response = await fetch(process.env.OLLAMA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("Error en la API de Ollama");
    }

    return await response.json();

  } catch (error) {
    throw error;
  }
};