import { useEffect } from "react";
import { useOllama } from "./hooks/useOllama"


function App() {

  const{sendPrompt, responses, loading, error}= useOllama();

 useEffect(() => {
    sendPrompt("¿Quién fue María Josefa Ortiz de Domínguez?");
}, []);

  console.log(responses)

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black">
      <h1 className="text-3xl font-bold text-amber-100" >
        hello this is de clonechatgpt,

      </h1>
    </div>
    </>
  )
}

export default App
