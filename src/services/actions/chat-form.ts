import { config, checkResponse } from "../../utils/api";
import { AppDispatch } from "../store/store";

export const MESSAGES_SEND_FORM_SET_VALUE = "MESSAGES_SEND_FORM_SET_VALUE";
export const MESSAGES_SEND_FORM_SUBMIT = "MESSAGES_SEND_FORM_SUBMIT";
export const MESSAGES_SEND_FORM_SUBMIT_SUCCESS =
  "MESSAGES_SEND_FORM_SUBMIT_SUCCESS";
export const MESSAGES_SEND_FORM_SUBMIT_FAILED =
  "MESSAGES_SEND_FORM_SUBMIT_FAILED";
export const MESSAGES_SEND_FORM_TEXT_INPUT_ENTER =
  "MESSAGES_SEND_FORM_TEXT_INPUT_ENTER";
export const MESSAGES_SEND_FORM_ADD_EMOJI = "MESSAGES_SEND_FORM_ADD_EMOJI";

export const setSendMessageFromValue = ({
  field,
  value,
}: {
  field: string;
  value: string;
}) => ({
  type: MESSAGES_SEND_FORM_SET_VALUE,
  field,
  value,
});

export function sendMessage(message: Partial<MessageContent>) {
  return async function (dispatch: AppDispatch) {
    dispatch({ type: MESSAGES_SEND_FORM_SUBMIT });
    try {
      const res = await fetch(
        `${config.firebaseBaseUrl}/${config.firebaseCollection}`,
        {
          method: "POST",
          body: JSON.stringify({
            ...message,
            date: new Date(),
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const success = await checkResponse(res, "application/json");
      if (success) {
        dispatch({ type: MESSAGES_SEND_FORM_SUBMIT_SUCCESS });
      } else {
        dispatch({ type: MESSAGES_SEND_FORM_SUBMIT_FAILED });
      }
    } catch (err) {
      dispatch({ type: MESSAGES_SEND_FORM_SUBMIT_FAILED });
    }
  };
}
