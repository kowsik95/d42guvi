import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import myContext from "../UserContext";

function StudentView() {
  const params = useParams();
  //   const userContext = useContext(myContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    let getStudent = async () => {
      try {
        let getData = await axios.get(
          `http://localhost:3003/studentView/${params.id}`
        );
        setData(getData.data);
        // console.log(data);
        // userContext.setStudents(...userContext.students, getData);
      } catch (error) {}
    };
    getStudent();
  }, []);
  return (
    <div className="container col-10">
      <h1 className="text-center">Student Details</h1>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>Mentor</th>
          </tr>
        </thead>
        <tbody>
          <tr className="justify-content-center text-center">
            <td>{data._id}</td>
            <td>{data.StudentName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentView;
