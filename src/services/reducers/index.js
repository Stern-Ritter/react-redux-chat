import { combineReducers } from "redux";
import {
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILED,
} from "../actions";
import { sendMessagesReducer } from "./chat-form";

const messagesInitialState = {
  loading: false,
  hasError: false,
  data: [],
};

const messagesReducer = (state = messagesInitialState, action) => {
  switch (action.type) {
    case GET_MESSAGES: {
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    }
    case GET_MESSAGES_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data.reverse(),
      };
    }
    case GET_MESSAGES_FAILED: {
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  messages: messagesReducer,
  sendMessages: sendMessagesReducer,
});
