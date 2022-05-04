import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import myContext from "./UserContext";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function Student() {
  const userContext = useContext(myContext);
  useEffect(() => {
    let getData = async () => {
      try {
        let studData = await axios.get("http://localhost:3003/students");

        userContext.setStudents(...userContext.students, studData.data);
        console.log(studData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  let deleteStudent = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          await axios.delete(`http://localhost:3003/student/${id}`);
        } catch (error) {
          console.log(error);
        }
        swal("Student has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your file is safe!");
      }
    });
  };

  return (
    <div className="col-10">
      <h1 className="text-center mt-2">Student List</h1>
      <div className="card-body">
        <div className="container">
          <div className="d-flex flex-row-reverse justify-content-start">
            <Link
              to="/createStudent"
              type="button"
              class=" btn btn-primary mb-2"
            >
              CreateStudent <strong>+</strong>
            </Link>
          </div>
          <table className="table table-success table-striped " cellSpacing="0">
            <thead>
              <tr className="text-center">
                <th>SNo.</th>
                <th>Student Name</th>
                <th>Class</th>
                <th>Age</th>
                <th>Date Of Birth</th>
                <th>Mentor Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {console.log(students)} */}
              {userContext.students.map((student, index) => {
                return (
                  <tr className="justify-content-center text-center">
                    <td>{index + 1}</td>
                    <td>{student.studentName}</td>
                    <td>{student.class}</td>
                    <td>{student.age}</td>
                    <td>{student.dob}</td>
                    <td>{student.mentorName}</td>
                    <td>
                      <Link
                        to={`/studentView/${student._id}`}
                        className="btn btn-sm btn-primary m-1"
                      >
                        View
                      </Link>
                      <button
                        to={`/studentEdit`}
                        className="btn btn-sm btn-warning m-1"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          deleteStudent(student._id);
                        }}
                        type={"reset"}
                        className="btn btn-sm btn-danger "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Student;
