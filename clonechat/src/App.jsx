import { useContext, useEffect } from "react";
import { ChatContext } from "./context/ChatContext";



function App() {
  const {state,dispatch} = useContext(ChatContext)

  useEffect(() => {
    
    dispatch(
      {
        type: "ADD_MESSAGE",
        payload: {
          id: 1,
          text: "hola bebes",
          role: "user"
        }
      }
    )
    
  }, [])
  
    console.log(state)
  
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
