import React from "react";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {!props.bio || props.bio === "" ? null : <p>{props.bio}</p> }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" /> 
      <Links linkedin={props.links.linkedin} github={props.links.github}/>
    </div>
  );
}

export default About;
