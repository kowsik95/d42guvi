import axios from "axios";
import React, { useContext, useEffect } from "react";
import myContext from "./UserContext";

function Mentors() {
  const userContext = useContext(myContext);
  useEffect(() => {
    let getMentor = async () => {
      try {
        let MentorData = await axios.get("http://localhost:3003/mentors");
        userContext.setMentors(...userContext.mentors, MentorData.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMentor();
  }, []);
  return (
    <div className="col-10">
      <h1 className="text-center mt-2">Mentor List</h1>
      <div className="card-body">
        <div className="container">
          <table className="table table-success table-striped " cellSpacing="0">
            <thead>
              <tr className="text-center">
                <th>SNo.</th>
                <th>Name</th>
                <th>Class</th>
                <th>Students Assigned</th>
              </tr>
            </thead>
            <tbody>
              {userContext.mentors.map((mentor, index) => {
                return (
                  <tr className="justify-content-center text-center">
                    <td>{index + 1}</td>
                    <td>{mentor.MentorName}</td>
                    <td>{mentor.class}</td>

                    <td>{mentor.rollno}</td>
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

export default Mentors;
