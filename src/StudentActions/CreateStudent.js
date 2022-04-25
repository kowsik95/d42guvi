import React, { useContext } from "react";
import { useFormik } from "formik";
import myContext from "../UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateStudent() {
  const navigate = useNavigate();
  const userContext = useContext(myContext);
  let formik = useFormik({
    initialValues: {
      studentName: "",
      class: "",
      age: 0,
      dob: "",
      mentorName: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.studentName) {
        errors.studentName = "Name Required";
      }
      if (!values.age || values.age < 10) {
        errors.age = "Age is not correct";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3003/createStudent", values);
        userContext.setStudents(...userContext.students, values);
        navigate("/students");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="container col-10 bg-success bg-opacity-25">
      <h1 className="text-center mb-3">Create Student</h1>

      <form onSubmit={formik.handleSubmit}>
        <div className="d-flex flex-column align-content-center flex-wrap">
          <label>Student Name:</label>
          <input
            type={"text"}
            name="studentName"
            onChange={formik.handleChange}
            value={formik.values.studentName}
          ></input>
          <pre>{formik.errors.studentName}</pre>
          <label>Class :</label>
          <input
            type={"text"}
            name="class"
            onChange={formik.handleChange}
            value={formik.values.class}
          ></input>
          <label>Age :</label>
          <input
            type={"number"}
            name="age"
            onChange={formik.handleChange}
            value={formik.values.age}
          ></input>
          <pre>{formik.errors.age}</pre>
          <label>Date Of Birth :</label>
          <input
            type={"date"}
            name="dob"
            onChange={formik.handleChange}
            value={formik.values.dob}
          ></input>
          <label>Mentor Name :</label>
          <input
            type={"text"}
            name="mentorName"
            onChange={formik.handleChange}
            value={formik.values.mentorName}
          ></input>
          <button className="bg-primary mt-2 rounded-pill">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateStudent;
