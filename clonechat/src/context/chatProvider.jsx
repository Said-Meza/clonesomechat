import { useReducer } from "react"
import { initialState } from "../reducers/ChatReducer"
import { chatReducer } from "../reducers/chatReducer"
import { ChatContext } from "./ChatContext"


export const ChatProvider = ({children}) => {

const [state, dispatch] = useReducer(chatReducer,initialState)

  return (
    <ChatContext.Provider value={{state,dispatch}}>
        {children}
    </ChatContext.Provider>
  )
}