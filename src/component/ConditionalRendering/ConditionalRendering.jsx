import React, { useState } from "react";
const ConditionalRendering = () => {
  const [value, setValue] = useState();
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      ConditionalRendering
      {isLogin ? <User /> : <Guest />}
      <button onClick={() => setIsLogin(true)}>Login</button>
      {value == "User" && <User />}
      <br />
      <button onClick={() => setValue("User")}>Add Value</button>
      <button onClick={() => setValue("Admin")}>reset</button>
    </div>
  );
};
export default ConditionalRendering;
