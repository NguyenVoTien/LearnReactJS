import React, { useState } from "react";
import Form from "./components/Form.jsx";
import "./components/styles.css";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handSubmitsuccess = () => {
    alert("update late");
  };

  return (
    <>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {inputs.map((input) => (
            <Form
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button onClick={handSubmitsuccess}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;

// -------------------------------------

// import { useState } from "react";
// import "./App.css";
// import ImgDemo from "./assets/imgdemo.png";
// function App() {
//   const [show, setshow] = useState(false);
//   const handleShow = () => {
//     setshow(!show);
//   };
//   const [state, setstate] = useState(1);
//   const handleUp = () => {
//     setstate(state + 1);
//   };
//   const handDown = () => {
//     setstate(state - 1);
//   };
//   if (state < 0) {
//     setstate(0);
//   }

//   const [changeColor, setchangeColor] = useState({ color: "red" });
//   const arrayColor = ["red", "blue", "green", "yellow", "violet", "pink"];
//   const handleChange = () => {
//     const randomColor =
//       arrayColor[Math.floor(Math.random() * arrayColor.length)];
//     setchangeColor({ color: randomColor });
//   };
//   return (
//     <>
//       <h1 style={changeColor}> this is color </h1>
//       <button onClick={handleChange}>Change</button> <br />
//       <img src={show ? ImgDemo : ""} />
//       <button onClick={handleShow}>show image</button>
//       <h2>{state}</h2>
//       <button onClick={handleUp}>tang</button>
//       <button onClick={handDown}>giam</button>
//     </>
//   );
// }

// export default App;
