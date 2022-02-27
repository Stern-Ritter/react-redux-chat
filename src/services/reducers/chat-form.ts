import {
  MESSAGES_SEND_FORM_SET_VALUE,
  MESSAGES_SEND_FORM_SUBMIT,
  MESSAGES_SEND_FORM_SUBMIT_SUCCESS,
  MESSAGES_SEND_FORM_SUBMIT_FAILED,
  MESSAGES_SEND_FORM_TEXT_INPUT_ENTER,
  MESSAGES_SEND_FORM_ADD_EMOJI,
} from "../actions/chat-form";

interface IMESSAGES_SEND_FORM_SET_VALUE {
  type: "MESSAGES_SEND_FORM_SET_VALUE";
  payload: {
    field: string;
    value: string;
  };
}

interface IMESSAGES_SEND_FORM_SUBMIT {
  type: "MESSAGES_SEND_FORM_SUBMIT";
}

interface IMESSAGES_SEND_FORM_SUBMIT_SUCCESS {
  type: "MESSAGES_SEND_FORM_SUBMIT_SUCCESS";
}

interface IMESSAGES_SEND_FORM_SUBMIT_FAILED {
  type: "MESSAGES_SEND_FORM_SUBMIT_FAILED";
}

interface IMESSAGES_SEND_FORM_TEXT_INPUT_ENTER {
  type: "MESSAGES_SEND_FORM_TEXT_INPUT_ENTER";
}

interface IMESSAGES_SEND_FORM_ADD_EMOJI {
  type: "MESSAGES_SEND_FORM_ADD_EMOJI";
  payload: {
    code: string;
  };
}

type MESSAGES_SEND_FORM_ACTION =
  | IMESSAGES_SEND_FORM_SET_VALUE
  | IMESSAGES_SEND_FORM_SUBMIT
  | IMESSAGES_SEND_FORM_SUBMIT_SUCCESS
  | IMESSAGES_SEND_FORM_SUBMIT_FAILED
  | IMESSAGES_SEND_FORM_TEXT_INPUT_ENTER
  | IMESSAGES_SEND_FORM_ADD_EMOJI;

const initialState = {
  form: {
    name: "Roland Deschain",
    message: "",
  },
  sendMessageRequest: false,
  sendMessageFailed: false,
  textInputEnter: false,
};

export const sendMessagesReducer = (
  state = initialState,
  action: MESSAGES_SEND_FORM_ACTION
) => {
  switch (action.type) {
    case MESSAGES_SEND_FORM_TEXT_INPUT_ENTER: {
      return {
        ...state,
        textInputEnter: true,
      };
    }

    case MESSAGES_SEND_FORM_SET_VALUE: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.field]: action.payload.value,
        },
      };
    }
    case MESSAGES_SEND_FORM_ADD_EMOJI: {
      return {
        ...state,
        form: {
          ...state.form,
          message: state.form.message + action.payload.code,
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
