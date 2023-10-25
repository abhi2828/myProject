import styled from "styled-components";
import stacks_of_coins_src from "../../assets/images/awt/stacks-of-coins.svg";
import calendar_silhouette_src from "../../assets/images/awt/calendar-silhouette.svg";
import profile_picture_src from "../../assets/images/awt/profile-picture.svg";
import star_src from "../../assets/images/awt/star.svg";

const StyledDiv1 = styled.div<{ size?: string }>`
  width: ${({ size }) => (size === "mobile" ? "40vw!important" : "381px")};
  flex-shrink: 0;

  border-radius: ${({ size }) =>
    size === "mobile" ? "1.6vw !important" : "14px"};
  border: 1px solid #fff;
  background: #fff;

  /* Shadow - Base */
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
    0px 1px 2px 0px rgba(0, 0, 0, 0.06);

  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    width: 335px;
    border-radius: 12px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    width: 272px;
    border-radius: 10px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    width: 222px;
    border-radius: 8px;
  }
`;
const StyledDiv2 = styled.div<{ src: string; size?: string }>`
  width: 100%;
  height: ${({ size }) => (size === "mobile" ? "17.6vw !important" : "166px")};
  background-image: ${({ src }) => `url(${src})`};
  border-radius: ${({ size }) =>
    size === "mobile" ? "1.6vw 1.6vw 0 0 !important" : "14px 14px 0 0"};
  margin-bottom: ${({ size }) =>
    size === "mobile" ? "2.4vw !important" : "24px"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    height: 146px;
    border-radius: 12px 12px 0 0;
    margin-bottom: 21.1px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    height: 119px;
    border-radius: 10px 10px 0 0;
    margin-bottom: 17px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    height: 97px;
    border-radius: 8px 8px 0 0;
    margin-bottom: 14px;
  }
`;

const StyledDiv3 = styled.div<{ size?: string }>`
  margin: ${({ size }) => (size === "mobile" ? "1.867vw !important" : "18px")};

  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    margin: 16px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    margin: 13px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    margin: 10px;
  }
`;

const StyledDiv4 = styled.div<{ size?: string }>`
  width: 100%;
  height: ${({ size }) => (size === "mobile" ? "1.067vw !important" : "12px")};
  flex-shrink: 0;
  position: relative;

  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.tertiary_text};
  background: ${({ theme }) => theme.light};
  margin-bottom: ${({ size }) =>
    size === "mobile" ? "2.4vw !important" : "25px"};

  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    height: 10px;
    margin-bottom: 22px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    height: 8px;
    margin-bottom: 18px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    height: 7px;
    margin-bottom: 15px;
  }
`;

const StyledDiv5 = styled.div<{ width: string; size?: string }>`
  height: ${({ size }) => (size === "mobile" ? "1.067vw !important" : "12px")};
  flex-shrink: 0;
  position: relative;
  top: -1px;
  width: ${({ width }) => `${width}`};

  border-radius: ${({ width }) =>
    width === "100%" ? "14px" : "14px 0px 0px 14px"};
  background: ${({ theme }) => theme.secondary};

  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    height: 10px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    height: 8px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    height: 7px;
  }
`;

const StyledDiv6 = styled.div<{ size?: string }>`
  display: flex;
  align-items: center;
  gap: ${({ size }) => (size === "mobile" ? "1.6vw !important" : "20px")};
  margin-bottom: ${({ size }) =>
    size === "mobile" ? "1.33vw !important" : "16px"};

  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    gap: 18px;
    margin-bottom: 14px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    gap: 15px;
    margin-bottom: 11px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    gap: 12px;
    margin-bottom: 9px;
  }
`;

const StyledDiv8 = styled.div<{ size?: string }>`
  position: relative;
  display: flex;
  margin-top: ${({ size }) => (size === "mobile" ? "4vw !important" : "0")};
  gap: ${({ size }) => (size === "mobile" ? "1.6vw !important" : "19px")};

  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    gap: 17px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    gap: 14px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    gap: 11px;
  }
`;

const StyledDiv9 = styled.div<{ size?: string }>`
  display: flex;
  align-items: center;
  margin-bottom: 3px;

  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    gap: 2px;
  }
`;

const StyledDiv10 = styled.div<{ size?: string }>`
  display: flex;
  align-items: center;
  gap: ${({ size }) => (size === "mobile" ? "0.533vw !important" : "4px")};
  margin-bottom: ${({ size }) =>
    size === "mobile" ? "0.533vw !important" : "0"};
`;

const StyledDiv11 = styled.div`
  display: flex;
`;

const StyledP1 = styled.p<{ size?: string }>`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ size }) =>
    size === "mobile" ? "1.867vw !important" : "18px"};
  font-weight: 700;
  text-transform: uppercse;
  margin-top: 0;
  margin-bottom: ${({ size }) =>
    size === "mobile" ? "1.6vw !important" : "16px"};

  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    font-size: 16px;
    margin-bottom: 14px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    font-size: 13px;
    font-size: 11px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    font-size: 10px;
    font-size: 9px;
  }
`;

const StyledP2 = styled.p<{ size?: string }>`
  color: ${({ theme }) => theme.primary_text};
  font-size: ${({ size }) =>
    size === "mobile" ? "2.133vw !important" : "20px"};
  font-weight: 700;
  margin-top: 0;
  margin-bottom: ${({ size }) =>
    size === "mobile" ? "1.867vw !important" : "20px"};
  height: ${({ size }) => (size === "mobile" ? "6.4vw !important" : "60px")};

  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    font-size: 18px;
    margin-bottom: 18px;
    height: 53px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    font-size: 15px;
    margin-bottom: 15px;
    height: 43px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    font-size: 12px;
    margin-bottom: 12px;
    height: 35px;
  }
`;

const StyledP3 = styled.p<{ size?: string }>`
  color: ${({ theme }) => theme.primary_text};
  font-family: "OpenSans";
  font-size: ${({ size }) => (size === "mobile" ? "1.6vw !important" : "16px")};
  font-weight: 400;
  line-height: ${({ size }) =>
    size === "mobile" ? "2.933vw !important" : "28px"};
  margin: 0;

  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    font-size: 14px;
    line-height: 25px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    font-size: 11px;
    line-height: 20px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    font-size: 9px;
    line-height: 16px;
  }
`;

const StyledP4 = styled.p<{ size?: string }>`
  color: ${({ theme }) => theme.primary_text};
  font-size: ${({ size }) =>
    size === "mobile" ? "1.867vw !important" : "18px"};
  font-weight: ${({ size }) => (size === "mobile" ? "400 !important" : "500")};
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 4px;

  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    font-size: 16px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    font-size: 12px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    font-size: 9px;
  }
`;

const StyledP5 = styled.p<{ size?: string }>`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ size }) =>
    size === "mobile" ? "1.333vw !important" : "14px"};
  font-family: "OpenSans";
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 5px;
  white-space: nowrap;

  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    font-size: 12px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    font-size: 10px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    font-size: 8px;
  }
`;

const StyledImg1 = styled.div<{ src: string; size?: string }>`
  position: relative;
  top: -3px;
  left: 0;
  width: ${({ size }) => (size === "mobile" ? "6.133vw !important" : "60px")};
  height: ${({ size }) => (size === "mobile" ? "6.133vw !important" : "60px")};
  background-image ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  border-radius: 30px;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    width: 53px;
    height: 53px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
        width: 43px;
        height: 43px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
        width: 35px;
        height: 35px;
  }
`;

const StyledImg = styled.img<{ size?: string }>`
  width: ${({ size }) => (size === "mobile" ? "3.467px !important" : "32px")};
  height: ${({ size }) => (size === "mobile" ? "3.467px !important" : "32px")};
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    width: 28px;
    height: 28px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    width: 23px;
    height: 23px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    width: 17px;
    height: 17px;
  }
`;

const StyledImg2 = styled.img<{ size?: string }>`
  width: ${({ size }) => (size === "mobile" ? "1.867vw !important" : "18px")};
  height: ${({ size }) => (size === "mobile" ? "1.867vw !important" : "18px")};
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    width: 16px;
    height: 16px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    width: 13px;
    height: 13px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    width: 10px;
    height: 10px;
  }
`;

const StyledUl = styled.ul<{ size?: string }>`
  list-style-type: disc;
  color: ${({ theme }) => theme.secondary_text};
  font-family: "OpenSans";
  font-size: ${({ size }) =>
    size === "mobile" ? "1.333vw !important" : "14px"};
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: ${({ size }) =>
    size === "mobile" ? "1.333vw !important" : "25px"};
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
        font-size: 12px;
        padding-left: 22px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
        font-size: 10px;
        padding-left: 18px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
        font-size: 8px;
        padding-left: 15px;
  }
`;

const Project = ({
  src,
  avatar,
  subtitle,
  title,
  progress,
  totalRaised,
  left,
  name,
  stars,
  campagin,
  region,
  size,
}: {
  src: string;
  avatar?: string;
  subtitle: string;
  title: string;
  progress: string;
  totalRaised: string;
  left: string;
  name: string;
  stars: number;
  campagin: number;
  region: string;
  size?: string;
}) => {
  return (
    <StyledDiv1 size={size}>
      <StyledDiv2 src={src} size={size} />
      <StyledDiv3 size={size}>
        <StyledP1 size={size}>{subtitle}</StyledP1>
        <StyledP2 size={size}>{title}</StyledP2>
        <StyledDiv4 size={size}>
          <StyledDiv5 size={size} width={progress} />
        </StyledDiv4>
        <StyledDiv6 size={size}>
          <StyledImg
            src={stacks_of_coins_src}
            alt="Stacks of coins"
            size={size}
          />
          <StyledP3 size={size}>Total Raised $ {totalRaised}</StyledP3>
        </StyledDiv6>
        <StyledDiv6 size={size}>
          <StyledImg
            src={calendar_silhouette_src}
            alt="Callender silhouette"
            size={size}
          />
          <StyledP3 size={size}>{left} Days left</StyledP3>
        </StyledDiv6>
        <StyledDiv8 size={size}>
          <StyledImg1 src={avatar ? avatar : profile_picture_src} size={size} />
          <div>
            <StyledDiv9 size={size}>
              <StyledP4 size={size}>{name}</StyledP4>
              <StyledDiv10 size={size}>
                {[...Array(stars).keys()].map((each: number) => (
                  <StyledImg2
                    key={each}
                    src={star_src}
                    alt="Star"
                    size={size}
                  />
                ))}
              </StyledDiv10>
            </StyledDiv9>
            <StyledDiv11>
              <StyledP5 size={size}>{campagin} Campagins</StyledP5>
              <StyledUl size={size}>
                <li>{region}</li>
              </StyledUl>
            </StyledDiv11>
          </div>
        </StyledDiv8>
      </StyledDiv3>
    </StyledDiv1>
  );
};

export default Project;
