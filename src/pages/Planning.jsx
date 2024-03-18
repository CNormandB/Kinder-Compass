import React, { useState } from "react";
import "./Planning.css";
import Header from "../components/Header";
import ELECTSelection from "../components/ELECTSelection"
import InterestSelection from "../components/InterestSelection";

function Planning() {
  return(
    <div>
      <Header/>
      <section className="new_plan">
        <form method="post" action="/create" className="new_plan_form">
        <h1>New Activity</h1>
          <div className="plan_dropdowns">
            <div className="interests">
              <p>Interests</p>
              <InterestSelection/>
            </div>
            <div className="elect_aspects">
              <p>ELECT Aspects</p>
              <ELECTSelection/>
            </div>
          </div>
          <div className="planning_input">
            <div className="description">
              <p>Description</p>
              <textarea placeholder="Describe your activity..." ></textarea>
            </div>
            <div className="material">
              <p>Material Needed</p>
              <textarea placeholder="I need..."></textarea>
            </div>
          </div>
          <div className="add_plan">
            <input type="submit" value="Add"/>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Planning;