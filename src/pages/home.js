import React from "react";
import { Text, Container } from "@nextui-org/react";
import "../index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faPython,
  faReact,
  faBootstrap,
  faNode,
  faLinux,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {
  return (
    <Container id="Home">
      <div className="home-left">
        <Text h1 size={60} weight="bold">
          Hi! 👋 <br /> My Name is
        </Text>

        <Text
          h1
          size={75}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        >
          Mahad Osman
        </Text>
        <Text
          h1
          size={60}
          css={{
            textGradient: "300deg, $blue600 -40%, $blue600 30%",
          }}
          weight="bold"
        >
          I'm a Software Developer
        </Text>
        {/* add linked in, github */}
      </div>
      <div className="home-right">
        <div className="home-languages">
          <p>langauges</p>
          <FontAwesomeIcon style={styles} size={"4x"} icon={faHtml5} />
          <FontAwesomeIcon style={styles} size={"4x"} icon={faCss3Alt} />
          <FontAwesomeIcon style={styles} size={"4x"} icon={faSquareJs} />
          <FontAwesomeIcon style={styles} size={"4x"} icon={faPython} />
        </div>
        <div className="home-frameworks">
          <p>frameworks & technologies</p>
          <FontAwesomeIcon
            style={{ margin: "30vg" }}
            size={"4x"}
            spin
            icon={faReact}
          />
          <FontAwesomeIcon style={styles} size={"4x"} icon={faBootstrap} />
          <FontAwesomeIcon style={styles} size={"4x"} icon={faNode} />
          <FontAwesomeIcon style={styles} size={"4x"} icon={faLinux} />
          <FontAwesomeIcon style={styles} size={"4x"} icon={faGit} />
        </div>
      </div>
    </Container>
  );
}

const styles = {
  margin: "10px",
};
