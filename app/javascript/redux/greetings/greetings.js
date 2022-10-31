import axios from "axios";

const GET_GREETINGS = "GET_GREETINGS";
const base_url = "http://127.0.0.1:3000/api/v1/messages";
const message = "";
export const getMessage = (message) => ({
  type: GET_GREETINGS,
  payload: message,
});

export const getMessages = () => (dispatch) => {
  axios.get(base_url).then((result) => {
    const greeting = result.data;
    dispatch(getMessage(greeting));
  });
};
const messagesReducer = (state = message, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default messagesReducer;
