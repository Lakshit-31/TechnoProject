import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { ReactFragment } from "./Component/ReactFragment";
import { ReactFragmentSecond } from "./Component/ReactFragment";
import Student from "./Component/Student";
import "./App.css";
// import AboutChild from "./Component/AboutChild/AboutChild";
// // import Parent from "./Component/Parent";
// import ConditionalRendering from "./Component/ConditionalRendering/ConditionalRendering";
// import { UserContext } from "./Component/UserContext";
// import Child from "./Component/Child";
import { useRef } from "react";
import Form from "./Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Navbar from "./Component//Navbar/Navbar";
import About from "./Component/About/About";
import Servcies from "./Component/Services/Services";
import Reviews from "./Component/Reviews/Reviews";
import Content from "./Component/Content/Content";
import Contact from "./Component/Contact/Contact";
import Section from "./Component/Section/Section";
import Thoughts from "./Component/Thoughts/Thoughts";

// UserContext;

const App = () => {
  // const value_pre = 10;
  // const inputRef = useRef();
  // const [value, setValue] = useState("");
  // const HandleChange = () => {
  //   console.log(inputRef.current.value);
  //   setValue(inputRef.current.value);
  // };
  // const [isLogin, setIsLogin] = useState(false);
  // const display = (value) => {
  //   console.log(value);
  //   console.log("Button Clicked");
  // };
  // const age = 20;
  // const name = "Lakshit";
  // const array = [1, 2, 3, 4, 5];
  // let students = {
  //   id: 101,
  //   name: "lakshit",
  //   roll: 201,
  //   age: 20,
  //   course: "BTech",
  //   place: "Udaipur",
  // };
  // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const SumTwoDigits = (a, b) => {
  //   let c;
  //   return a + b + 10;
  // };

  return (
    <>
      {/* <div>
        <Home />
      </div> */}
      <div>
        <div>
          <div>
            <BrowserRouter>
              {/* <Navbar /> */}
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>

    // <UserContext.Provider value={{ name, age , array }}>
    //   <Parent />
    //   {/* <Child /> */}
    // </UserContext.Provider>
    // <div>
    // {/* <h2>Controll Component</h2> */}
    // {/* <input type="text" ref={inputRef} onChange={HandleChange} />
    // <br />
    // Accessing data : {value} */}
    // {/* <Form/ /> */}
    // </div>
    /* <ConditionalRendering /> */
    // {/* <h1>Event Handling</h1>
    // <AboutChild liftclick={getData} /> */}
    // {/* <Parent /> */}
    // {/* <input type="text" />
    // <button onClick={() => display("")}>CLick</button> */}
    // {/* <h1>Sharing data from App Component to About Component</h1> */}
    // {/* <About arr={array} /> */}
    // {/* <Home /> <ReactFragment />
    // <ReactFragmentSecond />
    // <Student /> <Navbar />
    // <h1>Hello {name}</h1>
    // <br />
    // {students.course}
    // <br />
    // {array[2] - array[0]}
    // <br />
    // {SumTwoDigits(10, 20)} */}
    // {/* <h2>Value : {value}</h2>
    // <button onClick={() => setValue(value + 1)}>Increment</button>
    // <button onClick={() => setValue(value - 1)}>Decrement</button>
    // <button onClick={() => setValue(value_pre)}>Reset</button> */}
  );
};

export default App;
