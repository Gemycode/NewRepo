/* eslint-disable no-unused-vars */
import Header from "./components/Header";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// function GoalForm(props) {
//   const [formData, setFormData] = useState({ goal: "", by: "" });
//   function changeHandler(e) {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }
//   function submitHandler(e) {
//     e.preventDefault();
//     props.onAdd(formData);
//     setFormData({ goal: "", by: "" });
//   }
//   return (
//     <>
//       <h1>My Coffe Goals</h1>
//         <form onSubmit={submitHandler}>
//           <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler}/>
//           <input type="text" name="by" placeholder="By.." value={formData.by} onChange={changeHandler}/>
//           <button>Submit Goals</button>
//         </form>
//     </>
//   )
// }

function App() {
  return (
    <>
      <div className="container">
        <Header/>
        <Main/>
        <Services/>
        <Contact/>
        <Footer/>
      </div>
      ;
    </>
  );
}

export default App;
