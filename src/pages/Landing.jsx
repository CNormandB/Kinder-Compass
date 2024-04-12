import React, { useState } from "react";
import "./Landing.css";
import Header from "../components/Header";
import PostedActivity from "../components/PostedActivity";

function Landing() {
  return(
    <section>
      <Header/>
      <PostedActivity/>
    </section>
  );
}

export default Landing;