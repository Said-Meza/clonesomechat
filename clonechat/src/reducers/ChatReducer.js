export const initialState = {
  messages: [],
};

export const chatReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { messages: [...state.messages, action.payload] };
      case "LOAD_HISTORY":
      return {
          ...state,
          messages: action.payload
      };

    default:
      return state;
  }
};
