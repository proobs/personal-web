import React from "react";
import { Text, Container } from "@nextui-org/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";

export default function About() {
  const Card = (props) => {
    const { imageUrl, title, description, tags, link } = props;

    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg border-solid border-sky-500	">
        <img className="w-full" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-400 text-base">{description}</p>
        </div>
        <a className="githublink" href={link} target="_blank">
          {" "}
          <FontAwesomeIcon size={"2x"} icon={faGithub} />{" "}
        </a>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  };
  // const cardData = {
  //   imageUrl: "/img/card-top.jpg",
  //   title: "The Coldest Sunset",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  //   tags: ["#photography", "#travel", "#winter"],
  // };

  return (
    <Container id="About">
      <Text className="text-center" size={50} weight="bold">
        Personal Projects <br />
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
      </Text>

      <div className="card-container">
        <Card
          imageUrl="https://i.imgur.com/KI0uPZa.png"
          title="This Site"
          description="My e-Portfolio! Built from scratch 😊 "
          tags={["ReactJS", "NextUI", "Tailwind", "HTML & CSS"]}
          link="https://github.com/proobs/personal-web"
        />
        <Card
          imageUrl="https://i.imgur.com/4z4CF4n.jpeg"
          title="Ban-Disconnected"
          description="Public Moderation tool for Source Engine Applications. Tracks Client Data Such as IP, Steam API ID, and name during session. Banned players info is stored in a SQLITE or SQL database. Includes a adminUI!"
          tags={["SourcePawn", "mySQL", "SQLITE", "C++"]}
          link="https://github.com/proobs/Ban-Disconnected"
        />
        <Card
          imageUrl="https://i.ibb.co/KzPcyqX/Opera-Snapshot-2023-08-27-153827-i-imgur-com.png"
          title="UMBC Game"
          description="Full 15 week simulator of a UMBC Semester with mini games and an interactive map!"
          tags={["Java", "Processing"]}
          link="https://github.com/proobs/SP2_DELIVERABLE"
        />
        <Card
          imageUrl="https://i.imgur.com/yAdFRhh.png"
          title="hackUMBC.tech"
          description="Website for UMBC's 2023 Hackathon"
          tags={["ReactJS", "Javascript", "HTML & CSS"]}
          link="https://github.com/umbchackers/umbchackers.github.io/commits?author=proobs"
        />
      </div>
    </Container>
  );
}
