const model= import.meta.env.VITE_MODEL;
const ollamaUrl= import.meta.env.VITE_URL_API_OLLAMA;

// console.log(ollamaUrl,model)

export const  fetchApi = async (message) => {
    
    const requestBody={
        model,
        prompt: message,
        stream: false
    }

    const response  = await fetch(ollamaUrl,{
        method: 'POST',
        headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body:JSON.stringify(requestBody)
    })
    if (!response.ok) throw new Error('Error en la red o api ollama');

    return response.json();
} 
