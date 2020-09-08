/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Skill from "./skill";
import SectionHeader from "./../section-header";

const Skills = ({ skills }) => {
  return (
    <>
      <SectionHeader>Skills</SectionHeader>
      <section
        sx={{
          color: "text",
          fontFamily: "body",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(auto, 250px))",
          gridAutoRows: "auto",
          gap: "1.5em",
          width: "100%"
        }}
      >
        {skills.map((skill, index) => (
          <Skill
            key={skill + index}
            name={skill.name}
            keywords={skill.keywords}
          />
        ))}
      </section>
    </>
  );
};

export default Skills;
