import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./Student";
import TopBar from "./TopBar";
import { MyProvider } from "./UserContext";
import { useState } from "react";
import Mentors from "./Mentors";
import CreateStudent from "./StudentActions/CreateStudent";
import StudentView from "./StudentActions/StudentView";

function App() {
  const [students, setStudents] = useState([]);
  const [mentors, setMentors] = useState([]);
  return (
    <BrowserRouter>
      <MyProvider value={{ students, setStudents, mentors, setMentors }}>
        <TopBar></TopBar>
        <div className="row">
          <SideBar></SideBar>

          <Routes>
            <Route path="/students" element={<Student />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/createStudent" element={<CreateStudent />} />
            <Route path="/studentView/:id" element={<StudentView />} />
          </Routes>
        </div>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
