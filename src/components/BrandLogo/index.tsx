import styled from "styled-components";
import brand_1_src from "../../assets/images/awt/partners1.png";
import brand_2_src from "../../assets/images/awt/brands/brand2.png";
import brand_3_src from "../../assets/images/awt/brands/brand3.png";
import brand_4_src from "../../assets/images/awt/partners4.png";
import brand_5_src from "../../assets/images/awt/partners5.png";
import { useIsMobile, useIsTablet } from "nft/hooks";

const StyledDiv1 = styled.div<{ size?: string }>`
  margin-bottom: ${({ size }) => (size === "mobile" ? "8vw" : "3.65vw")};
`;

const StyledDiv2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  flex-wrap: wrap;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const StyledP = styled.p<{ size?: string }>`
  color: ${({ theme, size }) =>
    size === "mobile" ? theme.secondary_text : theme.primary_text};
  font-size: ${({ size }) => (size === "mobile" ? "3.5vw" : "32px")};
  font-weight: ${({ size }) => (size === "mobile" ? "500" : "700")};
  margin-left: ${({ size }) => (size === "mobile" ? "3.2vw" : "0")};
  margin-top: ${({ size }) => (size === "mobile" ? "3.8vw" : "0")};
  margin-bottom: ${({ size }) => (size === "mobile" ? "14px" : "15px")};
  text-align: ${({ size }) => (size === "mobile" ? "left" : "center")};
`;

const StyledImgDiv1 = styled.div<{ src: string }>`
  width: 286px;
  height: 220px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    width: 240px;
    height: 185px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    width: 220px;
    height: 169px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    width: 170px;
    height: 130.7px;
  }
`;

const StyledImgDiv = styled.div<{ src: string }>`
  width: 32%;
  height: 27vw;
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.md}px`}) {
    height: 25vw;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.sm}px`}) {
    height: 29.8vw;
  }
`;

const BrandLogo = ({ size }: { size?: string }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  if (!isMobile && !isTablet)
    return (
      <StyledDiv1>
        <StyledP>Our Partners</StyledP>
        <StyledDiv2>
          <StyledImgDiv1 src={brand_1_src} />
          <StyledImgDiv1 src={brand_3_src} />
          <StyledImgDiv1 src={brand_2_src} />
          <StyledImgDiv1 src={brand_4_src} />
          <StyledImgDiv1 src={brand_5_src} />
        </StyledDiv2>
      </StyledDiv1>
    );
  else
    return (
      <StyledDiv1 size="mobile">
        <StyledP size="mobile">Our Partners</StyledP>
        <StyledDiv2>
          <StyledImgDiv src={brand_1_src} />
          <StyledImgDiv src={brand_2_src} />
          <StyledImgDiv src={brand_3_src} />
        </StyledDiv2>
      </StyledDiv1>
    );
};

export default BrandLogo;
