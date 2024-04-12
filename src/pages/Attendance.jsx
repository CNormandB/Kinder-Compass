import React, { useState } from "react";
import "./Attendance.css";
import Header from "../components/Header";

function Attendance() {
  return(
    <section>
      <Header/>
      <p className="page_title">Class List</p>
      <p className="scheduled">Scheduled: 20</p>
      <p className="divider"> | </p>
      <p className="present">Present: 10</p>
      <table className="table">
        <tr className="table_titles">
          <th>Scheduled</th>
          <th>Present</th>
          <th>Child</th>
        </tr>
        <tr>
          <th>yes</th>
          <th>no</th>
          <th className="child_img"><img src="public/child1.png"/></th>
          <th>Jane Doe</th>
          <button className="door_button">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
              <path fill="#6B705C" d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1zm-2 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/>
            </svg>
          </button>
          <button className="move_room">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
              <path fill="#6B705C" d="M58.79 439.13A16 16 0 0 1 48 424c0-73.1 14.68-131.56 43.65-173.77c35-51 90.21-78.46 164.35-81.87V88a16 16 0 0 1 27.05-11.57l176 168a16 16 0 0 1 0 23.14l-176 168A16 16 0 0 1 256 424v-79.77c-45 1.36-79 8.65-106.07 22.64c-29.25 15.12-50.46 37.71-73.32 67a16 16 0 0 1-17.82 5.28Z"/>
            </svg>
          </button>
        </tr>
        <tr>
          <th>no</th>
          <th>no</th>
          <th>John Doe</th>
        </tr>
      </table>
    </section>
  
  );
}

export default Attendance;