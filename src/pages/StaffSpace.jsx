import React, { useState } from "react";
import "./StaffSpace.css";
import Header from "../components/Header"
import PostedActivity from "../components/PostedActivity"

function StaffSpace() {
  return(
    <section>
      <Header/>
      <div className="new_activity">
        <div className="title">
          <p>New Activities</p>
          <button>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="1em" 
              height="1em" 
              viewBox="0 0 24 24">
                <path 
                  fill="#6B705C" 
                  d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5">
                </path>
            </svg>
          </button>
        </div>
        <PostedActivity/>
      </div>
      <div className="planned_activity">
        <div className="title">
          <p>Planned Activities</p>
          <button className="header_new_entry">
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="40%" 
            height="20%" 
            viewBox="0 0 24 24">
              <g 
                fill="none" 
                stroke="#6B705C" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="1.5">
                <path d="M3.25 13h3.68a2 2 0 0 1 1.664.89l.812 1.22a2 2 0 0 0 1.664.89h1.86a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 17.07 13h3.68"/>
                <path d="m5.45 4.11l-2.162 7.847A8 8 0 0 0 3 14.082V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.918a8 8 0 0 0-.288-2.125L18.55 4.11A2 2 0 0 0 16.76 3H7.24a2 2 0 0 0-1.79 1.11M10 8.5h4m-2-2v4"/>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default StaffSpace;