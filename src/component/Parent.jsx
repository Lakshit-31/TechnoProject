// import React, { useState } from "react";
// import AboutChild from "./AboutChild/AboutChild";
// const Parent = () => {
//   const [value, setValue] = useState("");
//   const getData = (props) => {
//     console.log(props);
//     setValue(props);
//   };

//   return (
//     <div>
//       {/* <AboutChild setName={setName} />
//        <h1>Event Handling</h1> */}
//       <AboutChild liftclick={getData} />
//       {/* <input
//         type="text"
//         placeholder="enter name"
//         onChange={(e) => setName(e.target.value)}
//       /> */}
//     </div>
//   );
// };
// export default Parent;

// import { useContext } from "react";
// import { UserContext } from "./UserContext";
// UserContext;

// function Parent() {
//   const value = useContext(UserContext);
//   console.log("Parent", value);

//   return (
//     <div>
//       <h2>
//         {/* Parent Component */}
//         {value.age} <br />
//         {value.name} <br />
//         {value.array}
//       </h2>
//     </div>
//   );
// }
// export default Parent;
