import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fccllms from "../../Assets/Projects/fccgpt-thumb.png";
import mojo from "../../Assets/Projects/mojo-thumb.png";
import gptds from "../../Assets/Projects/gpt-ds-thumb.jpeg";
import securitypi from "../../Assets/Projects/secpi-thumb.png";
import chatpi from "../../Assets/Projects/chatpi-thumb.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fccllms}
              isBlog={false}
              title="Course: Build a Large Language Model from Scratch"
              description="My free course on building state-of-the-art chatbots from math, stats, and tensors."
              ghLink="https://github.com/Infatoshi/fcc-intro-to-llms"
              demoLink="https://www.youtube.com/watch?v=UU1WVnMk4E8&t="
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mojo}
              isBlog={false}
              title="Course: Intro to the Mojo Programming Language"
              description="A free course on the Mojo programming language. This course is designed to teach you the basics of the Mojo programming language."
              ghLink="https://github.com/Infatoshi/intro-to-mojo"
              demoLink="https://www.youtube.com/watch?v=5Sm9IVMet9c"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={securitypi}
              isBlog={false}
              title="Security Pi"
              description="A Raspberry Pi based security system that uses a camera mixed with computer vision algorithms to detect motion and send an alert to the user via discord pings."
              ghLink="https://github.com/Infatoshi/security-pi"
              demoLink="https://www.youtube.com/watch?v=tvpH8p3Crno"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gptds}
              isBlog={false}
              title="DiscordGPT"
              description="A JavaScript-based Discord bot that chats with users and contains conversation context."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatpi}
              isBlog={false}
              title="Raspberry Pi Voice Assistant"
              description="A raspberry pi based voice assistant utilizes the OpenAI API, text-to-speech, and speech-to-text converters."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>  */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
