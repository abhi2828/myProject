import styled from "styled-components";

import gold_star_src from "../../assets/images/awt/stars/gold_star.svg";
import silver_star_src from "../../assets/images/awt/stars/silver_star.svg";
import gold_light_star_src from "../../assets/images/awt/stars/gold_light_star.svg";
import silver_light_star_src from "../../assets/images/awt/stars/silver_light_star.svg";

const Container = styled.div<{size?:string}>`
  margin-bottom: ${({size}) => size === "mobile" ? "13.33vw" : "1.615vw"};
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Title = styled.p<{size?:string}>`
  color: #000;
  font-family: "Poppins";
  font-size: ${({size}) => size === "mobile" ? "7.467vw" : "4.6875vw"};
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0;
`;

const Box = styled.div<{size?:string}>`
  border-radius: ${({size}) => size === "mobile" ? "0 7.467vw" : "0 4.6875vw"};
  border: 0.8vw solid #000;
  background: rgba(217, 217, 217, 0);
  padding: ${({size}) => size === "mobile" ? "5.33vw !important" : "3.125vw"};
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.521vw;
`;

const Text = styled.p<{size?:string}>`
  color: #000;

  font-family: "Poppins";
  font-size: ${({size}) => size === "mobile" ? "4vw" : "2.604vw"};
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0;
`;

const StyledImg = styled.img<{size?:string}>`
  width: ${({size}) => size === "mobile" ? "6.133vw !important" : "4.063vw"};
  height: ${({size}) => size === "mobile" ? "5.867vw !important" : "3.9vw"};
`;

const Roadmap = ({ size }: { size?: string }) => {
  return (
    <Container size={size}>
      <Title size={size}>Roadmap</Title>
      <Box size={size}>
        <Flex>
          <StyledImg src={gold_star_src} alt="Gold Star" size={size} />
          <Text size={size}>1. TGE and meme the wokies</Text>
        </Flex>
        <Flex>
          <StyledImg src={silver_star_src} alt="Gold Star" size={size} />
          <Text size={size}>2. Fuck the wokies marketing stunt</Text>
        </Flex>
        <Flex>
          <StyledImg src={gold_light_star_src} alt="Gold Star" size={size} />
          <Text size={size}>3. CEX listing</Text>
        </Flex>
        <Flex>
          <StyledImg src={silver_light_star_src} alt="Gold Star" size={size} />
          <Text size={size}>4. Carry on anti-wokifying the world</Text>
        </Flex>
      </Box>
    </Container>
  );
};

export default Roadmap;
