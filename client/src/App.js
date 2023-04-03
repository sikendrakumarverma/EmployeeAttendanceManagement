//import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Register";
import AllEmployeesData from "./Components/AllEmployeesList";
import ViewEmployeeDetails from "./Components/ViewEmployeeDetails";
import TodayDetails from "./Components/ViewDetails";
import NotFound from "./Components/PageNotFound";
import "./App.css";

function App() {

  return (
    <div className="App" >
      <br />
      <BrowserRouter>
        <Routes>
          
          <Route path="/" exact element={<AllEmployeesData />}  />
            
          {/* <Route path="/" /> */}
          <Route path="*" exact element={<NotFound />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/view" exact element={<TodayDetails />} />
          <Route path="/allEmployees" exact element={<AllEmployeesData />} />
          <Route path="/ViewEmployeeDetails" exact element={<ViewEmployeeDetails />} />

        </Routes>
      </BrowserRouter>
      {/* <div>
        <AllEmployeesData />
      </div> */}
      {/* <div>
        <TodayDetails />
      </div> */}
    </div>
  );
}

export default App;