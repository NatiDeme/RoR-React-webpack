import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessages } from "../redux/greetings/greetings";

function Greeting() {
  const message = useSelector((state) => state.messagesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);
  return <h1>{message}</h1>;
}

export default Greeting;
