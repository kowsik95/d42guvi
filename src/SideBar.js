import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    // <div class="container-fluid">
    <div class="col-2">
      <nav
        id="sidebarMenu"
        class="d-md-block bg-dark sidebar collapse"
        style={{ height: "100vh" }}
      >
        <div class="position-sticky pt-3 ">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page">
                <span data-feather="home"></span>
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <Link to={"/students"} class="nav-link text-white">
                <span data-feather="file"></span>
                Student API
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/mentors" class="nav-link text-white" href="#">
                <span data-feather="shopping-cart"></span>
                Mentor API
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                <span data-feather="users"></span>
                Student to Mentors
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                <span data-feather="bar-chart-2"></span>
                Reports
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                <span data-feather="layers"></span>
                Integrations
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* </div> */}
    </div>
  );
}

export default SideBar;
