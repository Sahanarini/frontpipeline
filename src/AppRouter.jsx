import React ,{useRef} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Addfeedback from "./Addfeedback";
import Editfeedback from "./Editfeedback";
import Viewfeedback from "./Viewfeedback";
import Addstudent from "./Addstudent";
import Editstudent from "./Editstudent";
import Viewstudent from "./Viewstudent";
// ...

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/View" element={<Viewfeedback />} />
          <Route path="/create" element={<Addfeedback />} />
          <Route path="/update/:id" element={<Editfeedback />} />
          {/* <Route path="/delete" element={<App2 />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/customerreg" element={<Addstudent />} />
          <Route path="/viewemp" element={<Viewstudent />} />
          <Route path="/updateemp/:id" element={<Editstudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
