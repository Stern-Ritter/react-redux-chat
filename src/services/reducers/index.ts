import { combineReducers } from "redux";
import {
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILED,
} from "../actions";
import { sendMessagesReducer } from "./chat-form";

interface IGET_MESSAGES {
  type: "GET_MESSAGES";
}

interface IGET_MESSAGES_SUCCESS {
  type: "GET_MESSAGES_SUCCESS";
  payload: MessageContent[];
}

interface IGET_MESSAGES_FAILED {
  type: "GET_MESSAGES_FAILED";
}

type GET_MESSAGES_ACTION =
  | IGET_MESSAGES
  | IGET_MESSAGES_SUCCESS
  | IGET_MESSAGES_FAILED;

const messagesInitialState = {
  loading: false,
  hasError: false,
  data: [] as MessageContent[],
};

const messagesReducer = (
  state = messagesInitialState,
  action: GET_MESSAGES_ACTION
) => {
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
        data: action.payload.reverse(),
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
