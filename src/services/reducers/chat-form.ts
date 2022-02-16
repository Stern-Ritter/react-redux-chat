import {
  MESSAGES_SEND_FORM_SET_VALUE,
  MESSAGES_SEND_FORM_SUBMIT,
  MESSAGES_SEND_FORM_SUBMIT_SUCCESS,
  MESSAGES_SEND_FORM_SUBMIT_FAILED,
  MESSAGES_SEND_FORM_TEXT_INPUT_ENTER,
  MESSAGES_SEND_FORM_TEXT_INPUT_LEAVE,
  MESSAGES_SEND_FORM_ADD_EMOJI,
} from "../actions/chat-form";

const initialState = {
  form: {
    name: "Аноним",
    message: "",
  },
  sendMessageRequest: false,
  sendMessageFailed: false,
  textInputEnter: false,
};

export const sendMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_SEND_FORM_TEXT_INPUT_ENTER: {
      return {
        ...state,
        textInputEnter: true,
      };
    }
    case MESSAGES_SEND_FORM_TEXT_INPUT_LEAVE: {
      return {
        ...state,
        textInputEnter: false,
      };
    }
    case MESSAGES_SEND_FORM_SET_VALUE: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.value,
        },
      };
    }
    case MESSAGES_SEND_FORM_ADD_EMOJI: {
      return {
        ...state,
        form: {
          ...state.form,
          message: state.form.message + action.code,
        },
      };
    }
    case MESSAGES_SEND_FORM_SUBMIT: {
      return {
        ...state,
        sendMessageRequest: true,
        sendMessageFailed: false,
      };
    }
    case MESSAGES_SEND_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        form: {
          ...initialState.form,
          name: state.form.name,
        },
        sendMessageRequest: false,
      };
    }
    case MESSAGES_SEND_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        sendMessageRequest: false,
        sendMessageFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
