import Project from "./Project";
import styled from "styled-components";

import project_1_src from "../../assets/images/awt/projects/project_1.png";
import project_2_src from "../../assets/images/awt/projects/project_2.png";
import project_3_src from "../../assets/images/awt/funding/img3.png";
import project_4_src from "../../assets/images/awt/funding/img4.png";
import avatar_1_src from "../../assets/images/awt/projects/avatar_1.png";
import avatar_2_src from "../../assets/images/awt/projects/avatar_2.png";
import avatar_3_src from "../../assets/images/awt/projects/avatar_3.png";
import avatar_4_src from "../../assets/images/awt/projects/avatar_4.png";

const StyledDiv1 = styled.div<{ size?: string }>`
  margin-bottom: ${({ size }) => (size === "mobile" ? "4.533vw" : "4.427vw")};
`;

const StyledDiv2 = styled.div<{ size?: string }>`
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: ${({ size }) => (size === "mobile" ? "10px" : "20px")};
  flex-wrap: wrap;
`;

const StyledP1 = styled.p<{ size?: string }>`
  color: dark;
  font-size: ${({ size }) => (size === "mobile" ? "3.2vw" : "2.604vw")};
  font-weight: 600;
  text-align: center;
  margin-top: 0;
  margin-bottom: ${({ size }) => (size === "mobile" ? "1.6vw" : "1.771vw")};
`;

const StyledP2 = styled.p<{ size?: string }>`
  color: ${({ theme }) => theme.primary_text};
  font-family: "OpenSans";
  font-size: ${({ size }) => (size === "mobile" ? "2.67vw" : "16px")};
  font-weight: 400;
  line-height: ${({ size }) => (size === "mobile" ? "normal" : "28px")};
  margin-top: 0;
  margin-bottom: ${({ size }) => (size === "mobile" ? "1.87vw" : "5.208vw")};
  text-align: center;
`;

const Projects = ({ size }: { size?: string }) => {
  return (
    <StyledDiv1 size={size}>
      <StyledP1 size={size}>
        {size === "mobile"
          ? "PROJECTS WE ARE FUNDING TO ANTI-WOKE THE WORLD"
          : "PROJECTS WE’RE FUNDING"}
      </StyledP1>
      <StyledP2 size={size}>create chaos with $AWT</StyledP2>
      <StyledDiv2 size={size}>
        <Project
          src={project_1_src}
          avatar={avatar_1_src}
          subtitle="POSITIVE-SUM GAMES"
          title="Eating Meat At Vegan Protest"
          progress={"49%"}
          totalRaised="3,141,592"
          left="30"
          name="Cheyenne Curtis"
          stars={4}
          campagin={369}
          region="San Francisco, USA"
          size={size}
        />
        <Project
          src={project_2_src}
          avatar={avatar_2_src}
          subtitle="PROTECTING CAPITALISM"
          title="TIPPING OVER STOP OIL PROTESTORS"
          progress={"87%"}
          totalRaised="69,420,690"
          left="3"
          name="Ahmad Schleifer"
          stars={2}
          campagin={42}
          region="London, United Kingdoms"
          size={size}
        />
        <Project
          src={project_3_src}
          avatar={avatar_3_src}
          subtitle="PROTECTING WEAPONS WITH BABIES"
          title="ENSURING MORE ANTI-JEWISH PROPAGANDA"
          progress={"16%"}
          totalRaised="1,984"
          left="13"
          name="Muhammed Al Majdoub"
          stars={1}
          campagin={6}
          region="Gaza City, Gaza Strip"
          size={size}
        />
        <Project
          src={project_4_src}
          avatar={avatar_4_src}
          subtitle="ANTI-GOVERNMENT THOUGHTS"
          title="LEGALIZING DMT FOR RECREATIONAL USE"
          progress={"82%"}
          totalRaised="200,000,000"
          left="90"
          name="Joe Rogan"
          stars={5}
          campagin={69}
          region="Texas, United States"
          size={size}
        />
      </StyledDiv2>
    </StyledDiv1>
  );
};

export default Projects;
