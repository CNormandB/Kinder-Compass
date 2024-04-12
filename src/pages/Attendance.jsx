import React, { useState } from "react";
import "./Attendance.css";
import Header from "../components/Header";

function Attendance() {
  return(
    <section>
      <Header/>
      <div className="list_header">
        <p className="page_title">Class List</p>
        <div className="class_list_info">
          <p>Scheduled: 20</p>
          <p className="divider">  |  </p>
          <p>Present: 10</p>
        </div>
      </div>
      <table className="table">
        <tr className="table_titles">
          <th className="title_scheduled">Scheduled</th>
          <th className="title_present">Present</th>
          <th className="title_child">Child</th>
          <th className="title_medical">Medical</th>
          <th className="title_blank"></th>
        </tr>
        <tr className="table_data">
          <th className="data_scheduled">yes</th>
          <th className="data_present">no</th>
          <div className="data_child">
          <th className="child_img"><img src="public/child1.png"/></th>
          <th>Jane Doe</th>
          </div>
          <th className="data_medical">yes</th>
          <div className="data_buttons">
          <th>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 16 16">
                <path fill="#6B705C" d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1zm-2 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/>
              </svg>
            </button>
          </th>
          <th>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 512 512">
                <path fill="#6B705C" d="M58.79 439.13A16 16 0 0 1 48 424c0-73.1 14.68-131.56 43.65-173.77c35-51 90.21-78.46 164.35-81.87V88a16 16 0 0 1 27.05-11.57l176 168a16 16 0 0 1 0 23.14l-176 168A16 16 0 0 1 256 424v-79.77c-45 1.36-79 8.65-106.07 22.64c-29.25 15.12-50.46 37.71-73.32 67a16 16 0 0 1-17.82 5.28Z"/>
              </svg>
            </button>
          </th>
          </div>
        </tr>
      </table>
    </section>
  
  );
}

export default Attendance;