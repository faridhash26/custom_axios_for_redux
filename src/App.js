import React from "react";
import { getuser } from "./redux/simpleAction";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  const handleget = () => {
    dispatch(getuser());
  };
  return (
    <div>
      <button onClick={handleget}>get users</button>
    </div>
  );
};

export default App;
