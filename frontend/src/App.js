// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';
// // import ExpenseItem from './components/ExpenseItem';
// import {Button} from '@material-ui/core';
// import BasicSelect from './components/Select';
// import FormPropsTextFields from './components/Register';


// function App() {

//   return (
//     // <div>
//     //   <FormPropsTextFields></FormPropsTextFields>
//     //   <BrowserRouter>
//     //     <Routes>
//     //       <Route path="user/register" element={<h2>registered!</h2>}/>
//     //     </Routes>
//     //   </BrowserRouter>
//     // </div>

//   );
// }
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import your route components too
import Home from "./components/Home";
import Teams from "./components/Teams";
import Navbar from "./components/NavBar";
import FormPropsTextFields from "./components/Student";
import Buyer from "./components/Buyer";
import Vendor from "./components/vendor";
import Foods from "./components/Foods";
import Fav from "./components/Fav";
import Orders from "./components/Orders";
import Profile_edit from "./components/Profile_edit";
import Profile_edit_V from "./components/Profile_Edit_V";

function App() {
  var em;

  return (
    <BrowserRouter>
    {/* <FormPropsTextFields></FormPropsTextFields> */}
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buyer/:id" element={<Foods/>}/>
        <Route path="/buyer/:id/Profile" element={<Profile_edit/>}/>
        <Route path="buyer/:id/foods" element={<Foods/>}></Route>
        <Route path="buyer/:id/fav" element={<Fav/>}></Route>
        <Route path="buyer/:id/orders" element={<Orders/>}></Route>

        <Route path="/vendor/:id" element={<Vendor />}/>
        <Route path="/vendor/:id/foods" element={<Vendor />}/>
        <Route path="/vendor/:id/Profile" element={<Profile_edit_V />}/>





      </Routes>
    </BrowserRouter>
    // document.getElementById("root")
  );
}

export default App;
