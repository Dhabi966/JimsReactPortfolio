import React from "react";
import Project from "../Project";
import JATE from "../../assets/JATE.png";
import NOTETAKER from "../../assets/notetaker.png";
import SOCIALNETWORK from "../../assets/social-network.png";
import EMPLOYEETRACKER from "../../assets/employee-tracker.png";
import { Row, Col } from "react-bootstrap";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <Row xs={2} md={4} lg={12}>
        <Col><Project
          img={JATE}
          title="Jim's Awesome Text Editor"
          text="An installable PWA to create notes or code snippets with or without an internet connection"
          url="https://github.com/Dhabi966/JimsTextEditor"
        /></Col>
       <Col> <Project
          img={NOTETAKER}
          title="Jim's Note Taker"
          text="An app that lets you take, edit and delete quick notes"
          url="https://github.com/Dhabi966/JimsNoteTaker"
        /></Col>
        <Col><Project
          img={SOCIALNETWORK}
          title="Jim's Social Network"
          text="It's an API for a social network web application where users can share their thoughts, 
          react to friends` thoughts, and create a friend list"
          url="https://github.com/Dhabi966/JimsSocialNetwork"
        /></Col>
        <Col><Project
          img={EMPLOYEETRACKER}
          title="Jim's Employee Tracker"
          text="A way to view and manage departments, roles and employees in a company"
          url="https://github.com/Dhabi966/jimsemployeetracker"
        /></Col>
      </Row>
    </div>
  );
}