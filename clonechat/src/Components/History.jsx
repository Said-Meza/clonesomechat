import { useContext } from "react"
import { ChatContext } from "../context/ChatContext"
import { Message } from "./Message"


export const History = () => {

       const {state} = useContext(ChatContext)
       console.log(state.messages)

  return (

    <>

        {state.messages.map( 
                            (el,index)=><Message key={index} role={el.role} msg={el.message}/>
                           )}
    
    </>
  )
}
