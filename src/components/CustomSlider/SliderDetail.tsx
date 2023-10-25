import { useEffect, useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import styled from "styled-components";
import { useIsMobile } from "nft/hooks";

import NavBox from "./NavBox";
import vr_glasses_src from "../../assets/images/awt/vr-glasses.svg";
import book_src from "../../assets/images/awt/book.svg";
import video_src from "../../assets/images/awt/video.svg";
import doctor_bag_src from "../../assets/images/awt/doctor-bag.svg";
import clothes_src from "../../assets/images/awt/clothes.svg";
import transformation_src from "../../assets/images/awt/transformation.svg";

import "react-multi-carousel/lib/styles.css";
import * as styles from "./SliderDetail.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1920 },
    items: 6,
    slidesToSlide: 6,
  },
  desktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 6,
    slidesToSlide: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

interface NavList {
  src: string;
  alt: string;
  text: string;
}

const navList: NavList[] = [
  {
    src: vr_glasses_src,
    alt: "Vr glasses",
    text: "Only 2 genders",
  },
  {
    src: book_src,
    alt: "Book",
    text: "Saying the word gay",
  },
  {
    src: video_src,
    alt: "Video",
    text: "Fuck cancel culture",
  },
  {
    src: doctor_bag_src,
    alt: "Doctor bag",
    text: "All lives matter",
  },
  {
    src: clothes_src,
    alt: "Clothes",
    text: "Men in mens sports",
  },
  {
    src: transformation_src,
    alt: "Transformation",
    text: "Fuck vegans",
  },
];

const StyledDiv = styled.div`
  position: relative;
`;

const SliderDetail = () => {
  const isMobile = useIsMobile();

  return (
    <StyledDiv>
      <Carousel
        draggable={false}
        responsive={responsive}
        // infinite={true}
        autoPlay={isMobile ? false : true}
        autoPlaySpeed={5000}
        transitionDuration={2500}
        removeArrowOnDeviceType={[
          "superLargeDesktop",
          "largeDesktop",
          "desktop",
          "tablet",
          "mobile",
        ]}
        dotListClass={styles.customDotListStyle}
        renderDotsOutside={true}
        // showDots={true}
      >
        {navList.map((each: NavList, index: number) => (
          <NavBox key={index} src={each.src} alt={each.alt} text={each.text} />
        ))}
      </Carousel>
    </StyledDiv>
  );
};

export default SliderDetail;
