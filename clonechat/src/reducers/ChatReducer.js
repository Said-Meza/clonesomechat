export const initialState = {
  messages: [],
};

export const chatReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { messages: [...state.messages, action.payload] };

    default:
      return state;
  }
};
