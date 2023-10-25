import styled from "styled-components";
// import profile_picture_src from "../../assets/images/awt/profile-picture.svg";
import star_src from "../../assets/images/awt/star.svg";
import avatar_src from "../../assets/images/awt/avatar.png"

const StyledP1 = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 49px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 15px;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
        font-size: 42px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
        font-size: 35px;
        margin-bottom: 10px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
        font-size: 28px;
        margin-bottom: 7px;
  }
`;

const StyledP2 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 68px;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
        font-size: 15px;
        margin-bottom: 20px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
        margin-bottom: 14px;
  }
`;

const StyledP3 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  width: 180px;
  margin: 0;
`;

const StyledP4 = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  font-family: "OpenSans";
  font-weight: 700;
  margin-top: 4px;
  margin-bottom: 0;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
        margin-top: 0;
  }
`;

const StyledDiv1 = styled.div`
  position: relative;
  display: flex;
  gap: 19px;
`;

const StyledDiv2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
`;

const StyledDiv3 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const StyledDiv4 = styled.div`
  display: flex;
  gap: 40px;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
        gap: 10px;
  }
`;

// const StyledImg = styled.img`
//   position: relative;
//   top: -3px;
//   left: 0;
// `;

const StyledUl = styled.ul`
  list-style-type: disc;
  color: ${({ theme }) => theme.secondary_text};
  font-family: "OpenSans";
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
        font-size: 12px;
  }
`;

const Styledli = styled.li`
`;

const StyledAvatarDiv = styled.div<{src: string}>`
  width: 65px;
  height: 80px;
  background-image: ${({src}) => (`url(${src})`)};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const StyledDiv5 = styled.div`
  width: calc(100% - 84px);
`

const Sold = () => {
  return (
    <div>
      <StyledP1> 29,666,553,300,000 TOTAL SUPPLY</StyledP1>
      <StyledP2>TOTAL FUCK YOUSE TO THE WOKE AGENDA</StyledP2>
      <StyledDiv1>
        <StyledAvatarDiv src={avatar_src} />
        {/* <StyledImg src={profile_picture_src} alt="Profile" /> */}
        <StyledDiv5>
          <StyledDiv2>
            <StyledP3>Some guy</StyledP3>
            <StyledDiv3>
              <img src={star_src} alt="Star" />
              <img src={star_src} alt="Star" />
              <img src={star_src} alt="Star" />
            </StyledDiv3>
          </StyledDiv2>
          <StyledDiv4>
            <StyledP4>
              5,000,000 tokens
            </StyledP4>
            <StyledUl>
              <Styledli>
                I WANT TO BE ABLE TO SAY FAG NIGGER JEW AS A JOKE WITHOUT BEING
                CANCELLED
              </Styledli>
            </StyledUl>
          </StyledDiv4>
        </StyledDiv5>
      </StyledDiv1>
    </div>
  );
};

export default Sold;
