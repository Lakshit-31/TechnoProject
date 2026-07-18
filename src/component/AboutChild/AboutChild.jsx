// import React from "react";

// const AboutChild = (props) => {
//   console.log(props);
//   return (
//     <div className="myClass">
//       {/* <h1>About</h1> */}
//       {props.children[1]}
//     </div>
//   );
// };

// export default AboutChild;
import React, { useState } from "react";

const AboutChild = (value) => {
  // console.log(value);
  const dt = value.liftclick;
  const [name, setName] = useState("");
  // const name = "Lakshit";

  return (
    <div>
    
      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => dt(name)}>Send Data</button>
    </div>
  );
};

export default AboutChild;

// import React from "react";
// const AboutChild = (props) => {
//   return (
//     <div>
//       <h3>{props.name}</h3>
//     </div>
//   );
// };
// export default AboutChild;
